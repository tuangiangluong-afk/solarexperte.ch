// ========================================
// NATIONAL TARGETS - LOCALIZED ZONES (CH SOLAR)
// ========================================

export interface NationalTarget {
    slug: string;
    name: string;
    heroTitle: string;
    geo: { lat: number; lng: number };
    price_start: number;
    top_places: string[];
    zip: string;
    tier: 'BIG5' | 'GOLDEN' | 'HUB' | 'STRATEGIC';
    heroImage?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    { slug: "zuerich", name: "Zürich", heroTitle: "Solaranlage", geo: { lat: 47.3769, lng: 8.5417 }, price_start: 18000, top_places: ["Altstadt", "Riesbach", "Schwamendingen", "Oerlikon"], zip: "8000", tier: "BIG5" },
    { slug: "bern", name: "Bern", heroTitle: "Solaranlage", geo: { lat: 46.9480, lng: 7.4474 }, price_start: 17500, top_places: ["Kirchenfeld", "Länggasse", "Breitenrain", "Bümpliz"], zip: "3000", tier: "BIG5" },
    { slug: "basel", name: "Basel", heroTitle: "Solaranlage", geo: { lat: 47.5596, lng: 7.5886 }, price_start: 18000, top_places: ["Gundeldingen", "St. Alban", "Bachletten", "Clara"], zip: "4000", tier: "BIG5" },
    { slug: "luzern", name: "Luzern", heroTitle: "Solaranlage", geo: { lat: 47.0502, lng: 8.3093 }, price_start: 17000, top_places: ["Littau", "Tribschen", "Obergrund", "Wesemlin"], zip: "6000", tier: "GOLDEN" },
    { slug: "winterthur", name: "Winterthur", heroTitle: "Solaranlage", geo: { lat: 47.5022, lng: 8.7294 }, price_start: 17500, top_places: ["Stadt", "Mattenbach", "Seen", "Wülflingen"], zip: "8400", tier: "GOLDEN" },
    { slug: "st-gallen", name: "St. Gallen", heroTitle: "Solaranlage", geo: { lat: 47.4245, lng: 9.3767 }, price_start: 17000, top_places: ["Rotmonten", "Lachen", "Riethüsli", "St. Georgen"], zip: "9000", tier: "STRATEGIC" },
    { slug: "zug", name: "Zug", heroTitle: "Solaranlage", geo: { lat: 47.1662, lng: 8.5155 }, price_start: 19000, top_places: ["Zug West", "Zug Ost", "Oberwil", "Guthirt"], zip: "6300", tier: "STRATEGIC" },
    { slug: "aarau", name: "Aarau", heroTitle: "Solaranlage", geo: { lat: 47.3925, lng: 8.0442 }, price_start: 17000, top_places: ["Aarau", "Telli", "Zelgli", "Schachen"], zip: "5000", tier: "STRATEGIC" },
    { slug: "schaffhausen", name: "Schaffhausen", heroTitle: "Solaranlage", geo: { lat: 47.6973, lng: 8.6349 }, price_start: 17000, top_places: ["Herblingen", "Breite", "Niklausen", "Buchthalen"], zip: "8200", tier: "STRATEGIC" },
    { slug: "chur", name: "Chur", heroTitle: "Solaranlage", geo: { lat: 46.8508, lng: 9.5320 }, price_start: 16500, top_places: ["Altstadt", "Rheinfels", "Lürlibad", "Masans"], zip: "7000", tier: "STRATEGIC" }
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = target.price_start + " CHF";
    const priceDesc = "Kostenlose Offerte";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} ${target.name}`,
        domain: `${target.slug}.solarexperte.ch`, // rewrite target
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: "CH",
        region: "Schweiz",
        description: `${target.heroTitle} in ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "Kostenlose Beratung",
            "Garantierte Leistung",
            "Schweizer Fachpartner",
            "Volle Garantie",
            "Offerte in 24h"
        ],
        stations: [],
        hospitals: [],
        neighborhoods: target.top_places,
        points_of_interest: {
            hotels: [],
            nightlife: [],
            monuments: target.top_places,
            parking_difficulty: "Variable"
        },
        pricing: {
            base: priceDisplay,
            description: priceDesc,
            km: 0
        },
        phoneNumber: "044 500 00 00",
        email: "kontakt@solarexperte.ch",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} ${target.name} | ${priceDisplay}`,
            description: `Photovoltaik in ${target.name} (${target.zip}). Sichern Sie sich kantonale Fördergelder und die Pronovo Einmalvergütung.`
        }
    };
}
