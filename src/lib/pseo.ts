import type { CityConfig } from "@/lib/db";

export interface PseoPageContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_badge: string;
    intro_html: string;
    cta_primary: string;
    pricing_estimated: string;
    regional_subsidy: string;
    expert_tip: string;
}

const REGIONAL_DATA: Record<string, { subsidyName: string; subsidyAmount: string; avgPrice: string; }> = {
    "75": { subsidyName: "MaPrimeRénov' Paris", subsidyAmount: "MaPrimeRénov' + CEE + Aide Ville de Paris", avgPrice: "8 000€ – 18 000€" },
    "69": { subsidyName: "MaPrimeRénov' Métropole Lyon", subsidyAmount: "MaPrimeRénov' + CEE + Aide Métropole de Lyon", avgPrice: "7 500€ – 16 000€" },
    "13": { subsidyName: "MaPrimeRénov' Bouches-du-Rhône", subsidyAmount: "MaPrimeRénov' + CEE + Prime départementale 13", avgPrice: "7 000€ – 15 000€" },
    "06": { subsidyName: "MaPrimeRénov' Alpes-Maritimes", subsidyAmount: "MaPrimeRénov' + CEE + Aide MNCA", avgPrice: "7 500€ – 16 500€" },
    "33": { subsidyName: "MaPrimeRénov' Gironde", subsidyAmount: "MaPrimeRénov' + CEE + Aide Bordeaux Métropole", avgPrice: "7 000€ – 15 500€" },
    "59": { subsidyName: "MaPrimeRénov' Nord", subsidyAmount: "MaPrimeRénov' + CEE + Aide locale MEL", avgPrice: "7 000€ – 15 000€" },
    "44": { subsidyName: "MaPrimeRénov' Loire-Atlantique", subsidyAmount: "MaPrimeRénov' + CEE + Aide régionale Pays de la Loire", avgPrice: "7 000€ – 15 000€" }
};

const DEFAULT_REGIONAL = {
    subsidyName: "MaPrimeRénov' & CEE",
    subsidyAmount: "Jusqu'à 11 000€ de MaPrimeRénov' + Certificats d'Économie d'Énergie",
    avgPrice: "7 000€ – 16 000€"
};

function getExpertTip(city: string, dept: string, neighborhoods: string[]): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const isFrance = city.toLowerCase() === "france";
    const prep = isFrance ? "en" : "à";

    const tips = [
        `Pour une installation de pompe à chaleur ${prep} ${city}, nous recommandons une PAC air-eau si vous disposez déjà de radiateurs à eau chaude ou d'un plancher chauffant. Nos installateurs RGE QualiPAC partenaires réalisent l'étude thermique et le dimensionnement sous 24h.`,
        `À ${city}, coupler votre pompe à chaleur air-eau avec un ballon thermodynamique vous permet de couvrir 100% de vos besoins en chauffage ET eau chaude sanitaire. ${isFrance ? "Notre réseau" : `En ${dept}, nos artisans`} certifiés QualiPAC réalisent l'étude sous 24h.`,
        `Les aides MaPrimeRénov' ${prep} ${city} pour le remplacement d'une chaudière fioul ou gaz par une pompe à chaleur peuvent atteindre 11 000€. Pensez à faire valider votre éligibilité avant de signer un devis.`,
        `Pour optimiser le rendement de votre PAC ${prep} ${city}, veillez à bien isoler votre logement au préalable. Un COP de 4 signifie que pour 1 kWh d'électricité consommé, la PAC produit 4 kWh de chaleur.`,
    ];
    return tips[hash % tips.length];
}

function getIntroHtml(city: string, dept: string, neighborhoods: string[], postalCode: string, avgPrice: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const isFrance = city.toLowerCase() === "france";
    const prep = isFrance ? "en" : "à";

    const neighborhoodMention = neighborhoods.length >= 2
        ? `Nos techniciens QualiPAC interviennent dans tous les secteurs : <strong>${neighborhoods.slice(0, 3).join(', ')}</strong> et communes environnantes.`
        : "";

    const postalCodeMention = postalCode ? ` (${postalCode})` : "";

    const intros = [
        `<p class="mb-4">
            Vous souhaitez installer une <strong>pompe à chaleur</strong> ${prep} <strong>${city}${postalCodeMention}</strong> pour réduire vos factures de chauffage ? 
            Notre réseau d'installateurs qualifiés <strong>RGE QualiPAC</strong> conçoit et réalise la pose de votre système de chauffage performant (PAC air-eau ou air-air).
            ${neighborhoodMention}
        </p>
        <p>
            Une installation standard de PAC air-eau ${prep} ${city} coûte généralement entre <strong>${avgPrice}</strong> avant déduction des aides. 
            Le remplacement de votre ancienne chaudière par une pompe à chaleur vous permet d'économiser jusqu'à <strong>70%</strong> sur votre facture de chauffage annuelle.
        </p>`,

        `<p class="mb-4">
            Chauffez votre logement efficacement ${prep} <strong>${city}</strong>${dept ? ` (${dept})` : ''} et protégez-vous contre la hausse des prix de l'énergie fossile. 
            Nos experts en pompes à chaleur réalisent une étude thermique gratuite sur-mesure pour évaluer les besoins de votre habitat et estimer vos économies futures.
        </p>
        <p>
            ${neighborhoodMention} Budget estimé : <strong>${avgPrice}</strong> tout compris avant déduction des aides MaPrimeRénov' et CEE. 
            Nous vous aidons à constituer votre dossier de subventions pour maximiser vos aides.
        </p>`,

        `<p class="mb-4">
            Passez au chauffage haute performance ${prep} <strong>${city}</strong> en profitant des aides de l'État pour la rénovation énergétique. 
            Nos installateurs certifiés RGE QualiPAC vous garantissent des équipements de grandes marques (Daikin, Atlantic, Mitsubishi, Panasonic) garantis jusqu'à 10 ans.
        </p>
        <p>
            De l'étude thermique à la mise en service ${prep} ${city}, nous prenons en charge 100% des démarches administratives et le dossier MaPrimeRénov'. 
            ${neighborhoodMention}
        </p>`,
    ];

    return intros[hash % intros.length];
}

export async function getPseoContent(cityConfig: CityConfig, targetType: string = 'MIXED'): Promise<PseoPageContent> {
    const { city, department, region, postalCode, neighborhoods, pricing } = cityConfig;
    const dept = department || "";
    const postal = postalCode || "";
    const quartiers = neighborhoods || [];

    const deptCode = dept.length >= 2 ? dept.substring(0, 2) : "";
    const regionalInfo = REGIONAL_DATA[deptCode] || DEFAULT_REGIONAL;

    const realPrice = pricing?.base || "Sur Devis";

    const isFrance = city.toLowerCase() === "france";
    const prep = isFrance ? "en" : "à";

    const meta_title = `Installateur Pompe à Chaleur ${isFrance ? "en France" : city}${postal ? ` (${postal})` : ''} | RGE QualiPAC`;
    const meta_description = `Installation de pompe à chaleur air-eau et air-air ${prep} ${city} par un artisan certifié RGE QualiPAC. Économisez jusqu'à 70% sur votre chauffage. Devis gratuit sous 24h.`;

    const hero_title = `Installateur <span class="text-rose-500">Pompe à Chaleur</span> ${prep} ${city}${postal ? ` <span class="text-slate-400 text-3xl">(${postal})</span>` : ''}`;
    const hero_badge = regionalInfo.subsidyName;

    const intro_html = getIntroHtml(city, dept, quartiers, postal, regionalInfo.avgPrice);

    return {
        meta_title,
        meta_description,
        hero_title,
        hero_badge,
        intro_html,
        cta_primary: "Simuler mes aides chauffage",
        pricing_estimated: realPrice,
        regional_subsidy: regionalInfo.subsidyAmount,
        expert_tip: getExpertTip(city, dept, quartiers),
    };
}
