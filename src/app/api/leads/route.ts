import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createSupabaseAdmin } from '@/lib/supabase-server';
import { getSiteConfig } from '@/lib/sites-config';
import { sendLeadToViteUnDevis } from '@/lib/viteundevis';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("📥 [API/LEADS/DE] Received body:", body);
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
        let arbitrageStatus = 'direct_partner';
        
        const currentCountry = ('DE' as string);
        // Under 55 and not FR Béton -> forward to ViteUnDevis
        if (leadScore < 55 && currentCountry === 'FR') {
            arbitrageStatus = 'vite_un_devis';
        }

        let vudResult = null;
        if (arbitrageStatus === 'vite_un_devis') {
            console.log("📡 [ViteUnDevis] Forwarding lead to ViteUnDevis API...");
            const nameParts = (name || '').trim().split(/\s+/);
            const prenom = nameParts[0] || 'Client';
            const nom = nameParts.slice(1).join(' ') || 'Inconnu';
            
            const vudPayload = {
                nom,
                prenom,
                email,
                tel: phone,
                cp: postalCode,
                ville: city,
                cp_projet: postalCode,
                ville_projet: city,
                pays: 'fr',
                adresse1: 'Adresse non communiquee',
                tp: 1,
                type_bien: 2,
                situation: 1,
                delais: 2,
                description: `Projet de béton décoratif. Type de projet: ${projectType || 'N/A'}. Surface: ${monthlyBill || 'N/A'}. Camion toupie: ${roofType || 'N/A'}. Finition: ${solarLocation || 'N/A'}.`,
                cat_id: '4',
                site_name: domain || 'expertwaermepumpe.de'
            };
            
            try {
                vudResult = await sendLeadToViteUnDevis(vudPayload);
            } catch (err) {
                console.error("❌ Failed to forward to ViteUnDevis:", err);
            }
        }

        const apiKey = process.env.RESEND_API_KEY;
        const resend = apiKey ? new Resend(apiKey) : null;

        // 1. SAVE TO DATABASE (Supabase)
        const metadata = {
            project_type: projectType,
            monthly_bill: monthlyBill,
            roof_type: roofType,
            solar_location: solarLocation,
            source: 'website',
            attribution: attribution || { source: 'direct', medium: 'direct' },
            score: leadScore,
            arbitrage_status: arbitrageStatus,
            niche: 'pac',
            country: 'DE'
        };

        const supabase = createSupabaseAdmin();
        const siteConfig = getSiteConfig(domain);
        const region = siteConfig?.region || 'National';
        const department = siteConfig?.department || (postalCode ? postalCode.substring(0, 2) : null);

        const leadPayload: any = {
            name,
            email,
            phone,
            city,
            postal_code: postalCode,
            tenant_id: domain || 'expertwaermepumpe.de',
            type: 'pac_lead',
            housing_type: projectType,
            status: 'new',
            region: region,
            department: department,
            message: JSON.stringify(metadata, null, 2),
            niche: 'pac',
            arbitrage_status: arbitrageStatus,
            score: leadScore,
            country: 'DE'
        };

        // Graceful retry insertion if country column is not created in DB yet
        const { error: dbError } = await supabase
            .from('leads')
            .insert(leadPayload);

        if (dbError && dbError.code === '42703') { // undefined_column error
            console.log("⚠️ [Supabase] 'country' column does not exist, retrying without it...");
            delete leadPayload.country;
            const { error: retryError } = await supabase
                .from('leads')
                .insert(leadPayload);
            if (retryError) {
                console.error('Supabase DB Retry Error:', retryError);
            }
        } else if (dbError) {
            console.error('Supabase DB Error:', dbError);
        }

        // 2. SEND NOTIFICATION EMAIL (Resend)
        if (resend) {
            const subject = `💎 ${arbitrageStatus === 'direct_partner' ? '💎' : '✉️'} Nouveau Lead [${city} - ${postalCode || 'N/A'}] - ${name}`;
            const html = `
                <h1>Nouveau Lead - ${domain}</h1>
                <p><strong>Country / Niche :</strong> DE / pac</p>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${phone}</p>
                <p><strong>Détails :</strong> ${JSON.stringify(metadata, null, 2)}</p>
            `;

            await resend.emails.send({
                from: 'Wärmepumpe Experte <contact@expertwaermepumpe.de>',
                to: ['bonjour@expertwaermepumpe.de'],
                subject,
                html
            });
        }

        const vudDetails = vudResult?.devis_data?.devis_id ? {
            devis_id: vudResult.devis_data.devis_id,
            devis_hash: vudResult.devis_data.devis_hash || ''
        } : null;

        return NextResponse.json({ 
            success: true, 
            score: leadScore, 
            status: arbitrageStatus,
            vud: vudDetails
        });

    } catch (e: any) {
        console.error('API Error:', e);
        return NextResponse.json(
            { error: `Internal Server Error: ${e.message}` },
            { status: 500 }
        );
    }
}
