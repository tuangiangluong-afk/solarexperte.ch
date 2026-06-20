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

const DEFAULT_REGIONAL = {
    subsidyName: "Pronovo Förderung",
    subsidyAmount: "Einmalvergütung (EIV) für Photovoltaik",
    avgPrice: "15'000 CHF – 28'000 CHF"
};

function getExpertTip(city: string, postalCode: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const tips = [
        `Für eine Solaranlage in ${city} prüfen wir als Erstes die Ausrichtung und Neigung Ihres Daches. Auch Ost-West-Dächer erzielen heute hervorragende Erträge für den Eigenverbrauch.`,
        `In ${city} lohnt sich die Kombination Ihrer Photovoltaikanlage mit einem Stromspeicher (Batterie) und einer Ladestation, um Ihren Eigenverbrauch auf bis zu 80% zu steigern.`,
        `Die Anmeldung für die Pronovo Einmalvergütung und die Abstimmung mit dem lokalen Elektrizitätswerk in ${city} übernehmen unsere zertifizierten Solar-Installateure komplett für Sie.`
    ];
    return tips[hash % tips.length];
}

function getIntroHtml(city: string, postalCode: string, avgPrice: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    
    // Evaluate closures replacing ${city} etc.
    const intros = [
        `<p class="mb-4">Planen Sie eine <strong>Photovoltaikanlage</strong> in <strong>${city}</strong>, um eigenen Solarstrom zu produzieren und Ihre Stromrechnung zu senken? Unsere Schweizer Fachpartner garantieren höchste Qualität und Ertragssicherheit.</p><p>Eine Solaranlage für ein Einfamilienhaus in ${city} kostet schlüsselfertig im Durchschnitt <strong>${avgPrice}</strong>. Profitieren Sie von der staatlichen Förderung und machen Sie sich unabhängig von steigenden Strompreisen.</p>`,
        `<p class="mb-4">Produzieren Sie sauberen Strom direkt auf Ihrem eigenen Dach in <strong>${city}</strong>. Unsere Solar-Experten berechnen kostenlos das Potenzial Ihres Daches und die Wirtschaftlichkeit der Anlage.</p><p>Geschätztes Budget: <strong>${avgPrice}</strong> (vor Abzug der Fördergelder). Wir bieten Premium-Solarmodule mit bis zu 25 Jahren Leistungsgarantie.</p>`
    ];

    return intros[hash % intros.length];
}

export async function getPseoContent(cityConfig: CityConfig, targetType: string = 'MIXED'): Promise<PseoPageContent> {
    const { city, postalCode, pricing } = cityConfig;
    const postal = postalCode || "";
    
    const regionalInfo = DEFAULT_REGIONAL;
    const realPrice = pricing?.base || regionalInfo.avgPrice;

    // Use a small local function to render the strings that require dynamic interpolation 
    // at runtime (since the strings above use ${city} which we need to evaluate at runtime)
    
    const renderTip = (c: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const tips = [
        `Für eine Solaranlage in ${c} prüfen wir als Erstes die Ausrichtung und Neigung Ihres Daches. Auch Ost-West-Dächer erzielen heute hervorragende Erträge für den Eigenverbrauch.`,
        `In ${c} lohnt sich die Kombination Ihrer Photovoltaikanlage mit einem Stromspeicher (Batterie) und einer Ladestation, um Ihren Eigenverbrauch auf bis zu 80% zu steigern.`,
        `Die Anmeldung für die Pronovo Einmalvergütung und die Abstimmung mit dem lokalen Elektrizitätswerk in ${c} übernehmen unsere zertifizierten Solar-Installateure komplett für Sie.`
      ];
      return tips[hash % tips.length];
    };

    const renderIntro = (c: string, p: string, avg: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const intros = [
        `<p class="mb-4">Planen Sie eine <strong>Photovoltaikanlage</strong> in <strong>${c}</strong>, um eigenen Solarstrom zu produzieren und Ihre Stromrechnung zu senken? Unsere Schweizer Fachpartner garantieren höchste Qualität und Ertragssicherheit.</p><p>Eine Solaranlage für ein Einfamilienhaus in ${c} kostet schlüsselfertig im Durchschnitt <strong>${avg}</strong>. Profitieren Sie von der staatlichen Förderung und machen Sie sich unabhängig von steigenden Strompreisen.</p>`,
        `<p class="mb-4">Produzieren Sie sauberen Strom direkt auf Ihrem eigenen Dach in <strong>${c}</strong>. Unsere Solar-Experten berechnen kostenlos das Potenzial Ihres Daches und die Wirtschaftlichkeit der Anlage.</p><p>Geschätztes Budget: <strong>${avg}</strong> (vor Abzug der Fördergelder). Wir bieten Premium-Solarmodule mit bis zu 25 Jahren Leistungsgarantie.</p>`
      ];
      return intros[hash % intros.length];
    };

    return {
        meta_title: `Photovoltaik & Solaranlagen Installateur in ${city}${postal ? ` (${postal})` : ""}`,
        meta_description: `Installation von Solaranlagen in ${city} durch Schweizer Fachpartner. Sichern Sie sich die Pronovo Förderung. Unverbindliche Offerte in 24h.`,
        hero_title: `Fachpartner für <span class="text-amber-500">Solaranlagen</span> in ${city}${postal ? ` <span class="text-slate-400 text-3xl">(${postal})</span>` : ""}`,
        hero_badge: regionalInfo.subsidyName,
        intro_html: cityConfig.unique_intro || renderIntro(city, postal, realPrice),
        cta_primary: "Ertrag und Offerte berechnen",
        pricing_estimated: realPrice,
        regional_subsidy: regionalInfo.subsidyAmount,
        expert_tip: cityConfig.unique_expert_tip || renderTip(city),
    };
}
