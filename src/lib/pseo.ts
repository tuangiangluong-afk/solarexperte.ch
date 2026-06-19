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
    "ZH": { subsidyName: "Pronovo + Kanton Zürich", subsidyAmount: "Einmalvergütung + Lokale Förderung", avgPrice: "25'000 CHF – 35'000 CHF" },
    "BE": { subsidyName: "Pronovo + Kanton Bern", subsidyAmount: "Einmalvergütung + Berner Solarprogramm", avgPrice: "24'000 CHF – 33'000 CHF" },
    "BS": { subsidyName: "Pronovo + Kanton Basel", subsidyAmount: "Einmalvergütung + Basler Förderung", avgPrice: "25'000 CHF – 34'000 CHF" },
};

const DEFAULT_REGIONAL = {
    subsidyName: "Pronovo Einmalvergütung",
    subsidyAmount: "Bis zu 30% der Investitionskosten über Pronovo",
    avgPrice: "20'000 CHF – 35'000 CHF"
};

type SpintaxType = "meta_title" | "meta_description" | "hero_title" | "hero_subtitle" | "cta_primary";
type SpintaxContext = "HUB" | "LOCAL";

const templates: Record<SpintaxType, Record<SpintaxContext, string[]>> = {
    meta_title: {
        HUB: [
            "Die besten Photovoltaik-Installateure in {city} | 3 Offerten",
            "Solaranlage in {city} - Preise vergleichen & Fördergelder sichern",
            "Top Solar-Experten im Kanton {dept} | Unverbindlicher Vergleich"
        ],
        LOCAL: [
            "Ihr lokaler Photovoltaik-Experte in {city} | Offerte in 24h",
            "Solaranlage installieren in {city} | Schweizer Qualität",
            "Photovoltaik & Speicher in {city} - Machen Sie sich unabhängig"
        ]
    },
    meta_description: {
        HUB: [
            "Vergleichen Sie geprüfte Solar-Installateure in {city}. Sparen Sie bei den Installationskosten und sichern Sie sich die Einmalvergütung (Pronovo).",
            "Photovoltaik-Verzeichnis für {city}. Finden Sie den besten Experten für Ihr Einfamilienhaus. Transparente Preise und lokale Fachbetriebe."
        ],
        LOCAL: [
            "Reduzieren Sie Ihre Stromrechnung in {city}. Lokaler Solar-Installateur, schlüsselfertige PV-Anlagen inkl. Anmeldung und Fördergelder.",
            "Ihr Fachbetrieb für Solaranlagen in {city}. Höchste Erträge, Top-Materialien und schnelle Installation für Ihr Eigenheim im Kanton {dept}."
        ]
    },
    hero_title: {
        HUB: [
            "Vergleichen Sie die <span class=\"text-amber-500\">besten Solar-Experten</span> in {city}",
            "Photovoltaik in <span class=\"text-amber-500\">{city}</span>: Preise & Offerten vergleichen",
            "Finden Sie Ihren <span class=\"text-amber-500\">Solar-Installateur</span> in {city}"
        ],
        LOCAL: [
            "Ihr <span class=\"text-amber-500\">Photovoltaik-Installateur</span> in {city}",
            "Werden Sie unabhängig mit einer Solaranlage in <span class=\"text-amber-500\">{city}</span>",
            "Die <span class=\"text-amber-500\">Solar-Experten</span> für den Kanton {dept}"
        ]
    },
    hero_subtitle: {
        HUB: [
            "Erhalten Sie bis zu 3 kostenlose Offerten von zertifizierten lokalen Fachbetrieben. Sichern Sie sich die maximalen Fördergelder.",
            "Sparen Sie Zeit und Geld. Wir finden die besten Solar-Profis in Ihrer Nähe für Ihr Eigenheim."
        ],
        LOCAL: [
            "Schlüsselfertige Solaranlagen: Von der Planung über die Pronovo-Förderung bis zur Installation. Alles aus einer Hand in Ihrer Nähe.",
            "Schützen Sie sich vor steigenden Strompreisen. Kostenlose Ertragsanalyse für Ihr Haus in {city}."
        ]
    },
    cta_primary: {
        HUB: ["Offerten vergleichen"],
        LOCAL: ["Kostenlose Analyse anfordern"]
    }
};

export async function getPseoContent(cityConfig: CityConfig, isHub: boolean = false): Promise<PseoPageContent> {
    const context: SpintaxContext = isHub ? "HUB" : "LOCAL";
    const cityHash = cityConfig.city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const pick = (arr: string[]) => arr[cityHash % arr.length];
    
    const replaceVars = (text: string) => {
        return text
            .replace(/{city}/g, cityConfig.city)
            .replace(/{dept}/g, cityConfig.department || "");
    };

    const regional = REGIONAL_DATA[cityConfig.department || ""] || DEFAULT_REGIONAL;

    return {
        meta_title: replaceVars(pick(templates.meta_title[context])),
        meta_description: replaceVars(pick(templates.meta_description[context])),
        hero_title: replaceVars(pick(templates.hero_title[context])),
        hero_badge: isHub ? "100% Kostenlos | Unverbindlich" : `Lokaler Fachbetrieb in ${cityConfig.city}`,
        intro_html: replaceVars(pick(templates.hero_subtitle[context])),
        cta_primary: pick(templates.cta_primary[context]),
        pricing_estimated: regional.avgPrice,
        regional_subsidy: regional.subsidyAmount,
        expert_tip: `Profitieren Sie von der Einmalvergütung (Pronovo) im Kanton ${cityConfig.department || ""}.`
    };
}
