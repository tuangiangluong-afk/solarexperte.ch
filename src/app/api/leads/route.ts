import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createSupabaseAdmin } from '@/lib/supabase-server';
import { getSiteConfig } from '@/lib/sites-config';
import { sendLeadToViteUnDevis } from '@/lib/viteundevis';
import { sendLeadToHabitissimo } from '@/lib/habitissimo';
import { sendLeadToDAA } from '@/lib/daa';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("📥 [API/LEADS] Received body:", body);
        const {
            name, email, phone, city, postalCode, domain,
            projectType, monthlyBill, roofType, solarLocation,
            attribution
        } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Fields name, email and phone are required' },
                { status: 400 }
            );
        }

        let leadScore = body.leadScore || 60;
        const currentCountry = 'CH' as string;
        const currentNiche = 'solar';
        
        // ----------------------------------------------------
        // ARBITRAGE GEOGRAPHIQUE
        // ----------------------------------------------------
        let arbitrageStatus = 'direct_partner';
        let arbitrageResult: any = null;

        if (currentCountry === 'FR' && leadScore < 55) {
            arbitrageStatus = 'vite_un_devis';
        } else if (currentCountry === 'ES' || currentCountry === 'MX') {
            arbitrageStatus = 'habitissimo';
        } else if (currentCountry === 'DE' || currentCountry === 'CH' || currentCountry === 'AT') {
            arbitrageStatus = 'daa';
        }

        console.log(`⚖️ [ARBITRAGE] Pays: ${currentCountry} | Niche: ${currentNiche} | Status: ${arbitrageStatus}`);

        // 1. VITEUNDEVIS (FR)
        if (arbitrageStatus === 'vite_un_devis') {
            console.log("📡 [ViteUnDevis] Forwarding lead...");
            const nameParts = (name || '').trim().split(/\s+/);
            const prenom = nameParts[0] || 'Client';
            const nom = nameParts.slice(1).join(' ') || 'Inconnu';
            
            const vudPayload = {
                nom, prenom, email, tel: phone, cp: postalCode, ville: city,
                cp_projet: postalCode, ville_projet: city, pays: 'fr', adresse1: 'Adresse non communiquée',
                tp: 1, type_bien: 2, situation: 1, delais: 2,
                description: `Projet: ${projectType || 'N/A'}. Surface: ${monthlyBill || 'N/A'}. Generé via ${domain}`,
                cat_id: '163',
                site_name: domain || 'solarexperte.ch'
            };
            try {
                arbitrageResult = await sendLeadToViteUnDevis(vudPayload);
            } catch (err) { console.error("❌ Failed to forward to ViteUnDevis:", err); }
        }

        // 2. HABITISSIMO (ES / MX)
        if (arbitrageStatus === 'habitissimo') {
            console.log("📡 [Habitissimo] Forwarding lead...");
            const habitissimoPayload = {
                contact: { name, email, phone, zip_code: postalCode, city: city },
                project: { category: currentNiche, description: `Demande de devis générée depuis ${domain}. Projet: ${projectType}`, timeline: "Asap" }
            };
            try {
                arbitrageResult = await sendLeadToHabitissimo(habitissimoPayload);
            } catch (err) { console.error("❌ Failed to forward to Habitissimo:", err); }
        }

        // 3. DAA (DE / CH / AT)
        if (arbitrageStatus === 'daa') {
            console.log("📡 [DAA] Forwarding lead...");
            const nameParts = (name || '').trim().split(/\s+/);
            const daaPayload = {
                customer: { first_name: nameParts[0] || 'Kunde', last_name: nameParts.slice(1).join(' ') || 'Unbekannt', email, phone, zip: postalCode, city },
                inquiry: { trade: currentNiche, notes: `Projekt: ${projectType}. Generiert via ${domain}` }
            };
            try {
                arbitrageResult = await sendLeadToDAA(daaPayload);
            } catch (err) { console.error("❌ Failed to forward to DAA:", err); }
        }

        // 4. SAVE TO DATABASE (Supabase)
        const metadata = {
            project_type: projectType,
            monthly_bill: monthlyBill,
            roof_type: roofType,
            solar_location: solarLocation,
            source: 'website',
            attribution: attribution || { source: 'direct', medium: 'direct' },
            score: leadScore,
            arbitrage_status: arbitrageStatus,
            niche: currentNiche,
            country: currentCountry
        };

        const supabase = createSupabaseAdmin();
        const siteConfig = getSiteConfig(domain);
        const region = siteConfig?.region || 'National';
        const department = siteConfig?.department || (postalCode ? postalCode.substring(0, 2) : null);

        const leadPayload: any = {
            name, email, phone, city, postal_code: postalCode,
            tenant_id: domain || 'solarexperte.ch',
            type: `${currentNiche}_lead`,
            housing_type: projectType,
            status: 'new',
            region: region,
            department: department,
            message: JSON.stringify(metadata, null, 2),
            niche: currentNiche,
            arbitrage_status: arbitrageStatus,
            score: leadScore,
            country: currentCountry
        };

        const { error: dbError } = await supabase.from('leads').insert(leadPayload);
        if (dbError && dbError.code === '42703') { 
            console.log("⚠️ [Supabase] 'country' column missing, retrying without it...");
            delete leadPayload.country;
            await supabase.from('leads').insert(leadPayload);
        }

        // 5. SEND NOTIFICATION EMAIL (Resend)
        const apiKey = process.env.RESEND_API_KEY;
        const resend = apiKey ? new Resend(apiKey) : null;
        if (resend) {
            const siteName = siteConfig?.name || domain;
            const emoji = arbitrageStatus === 'direct_partner' ? '💎' : '🤝';
            const subject = `${emoji} Nouveau Lead [${city} - ${postalCode || 'N/A'}] - ${name}`;
            const html = `
                <h1>Nouveau Lead - ${currentNiche.toUpperCase()}</h1>
                <p><strong>Domaine :</strong> ${domain} (${city} - ${postalCode || 'N/A'})</p>
                
                <div style="background-color: ${arbitrageStatus === 'direct_partner' ? '#f0fdf4' : '#f8fafc'}; border: 1.5px solid ${arbitrageStatus === 'direct_partner' ? '#22c55e' : '#cbd5e1'}; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                    <h2 style="margin-top:0; color: ${arbitrageStatus === 'direct_partner' ? '#166534' : '#334155'};">
                        Scoring & Routage : ${arbitrageStatus === 'direct_partner' ? '💎 PARTENAIRE DIRECT' : '✉️ REVENDU (' + arbitrageStatus.toUpperCase() + ')'}
                    </h2>
                    <p><strong>Score :</strong> ${leadScore} / 100</p>
                    <p><strong>Statut Arbitrage :</strong> ${arbitrageStatus}</p>
                    <p><strong>Pays :</strong> ${currentCountry}</p>
                </div>

                <h2>Informations de contact</h2>
                <ul>
                    <li><strong>Nom :</strong> ${name}</li>
                    <li><strong>Email :</strong> ${email}</li>
                    <li><strong>Téléphone :</strong> ${phone}</li>
                </ul>

                <h2>Critères de Qualification</h2>
                <ul>
                    ${Object.entries(metadata)
                        .filter(([k]) => !['attribution', 'score', 'arbitrage_status', 'niche', 'country', 'source'].includes(k))
                        .map(([k, v]) => `<li><strong>${k.replace(/_/g, ' ')} :</strong> ${v || 'N/A'}</li>`)
                        .join('\n                    ')}
                </ul>

                <h2>Attribution Marketing</h2>
                <ul>
                    <li><strong>Source / Medium :</strong> ${attribution?.source || 'direct'} / ${attribution?.medium || 'direct'}</li>
                    ${attribution?.campaign ? `<li><strong>Campagne :</strong> ${attribution.campaign}</li>` : ''}
                    ${attribution?.term ? `<li><strong>Mot-clé recherché :</strong> ${attribution.term}</li>` : ''}
                    ${attribution?.landing_page ? `<li><strong>Page de capture :</strong> ${attribution.landing_page}</li>` : ''}
                </ul>
            `;

            await resend.emails.send({
                from: `${siteName} <contact@${domain}>`,
                to: [`bonjour@${domain}`],
                subject,
                html
            });
        }

        return NextResponse.json({ 
            success: true, 
            score: leadScore, 
            status: arbitrageStatus,
            arbitrage_result: arbitrageResult
        });

    } catch (e: any) {
        console.error('API Error:', e);
        return NextResponse.json(
            { error: `Internal Server Error: ${e.message}` },
            { status: 500 }
        );
    }
}
