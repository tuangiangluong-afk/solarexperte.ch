// ========================================
// NATIONAL TARGETS - LOCALIZED ZONES
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
    {
        "slug": "berlin",
        "name": "Berlin",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 52.52,
            "lng": 13.405
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "10115",
        "tier": "BIG5",
        "heroImage": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "hamburg",
        "name": "Hamburg",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 53.5511,
            "lng": 9.9937
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "20095",
        "tier": "BIG5",
        "heroImage": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "muenchen",
        "name": "München",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 48.1351,
            "lng": 11.582
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "80331",
        "tier": "BIG5",
        "heroImage": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "koeln",
        "name": "Köln",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 50.9375,
            "lng": 6.9603
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "50667",
        "tier": "GOLDEN",
        "heroImage": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "frankfurt",
        "name": "Frankfurt",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 50.1109,
            "lng": 8.6821
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "60311",
        "tier": "GOLDEN",
        "heroImage": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "stuttgart",
        "name": "Stuttgart",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 48.7758,
            "lng": 9.1829
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "70173",
        "tier": "GOLDEN",
        "heroImage": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "duesseldorf",
        "name": "Düsseldorf",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 51.2277,
            "lng": 6.7735
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "40210",
        "tier": "STRATEGIC",
        "heroImage": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "dortmund",
        "name": "Dortmund",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 51.5136,
            "lng": 7.4653
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "44135",
        "tier": "STRATEGIC",
        "heroImage": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "essen",
        "name": "Essen",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 51.4556,
            "lng": 7.0116
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "45127",
        "tier": "STRATEGIC",
        "heroImage": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
    },
    {
        "slug": "leipzig",
        "name": "Leipzig",
        "heroTitle": "Wärmepumpe",
        "geo": {
            "lat": 51.3397,
            "lng": 12.3731
        },
        "price_start": 8500,
        "top_places": [
            "Centro",
            "Residencial",
            "Norte",
            "Sur"
        ],
        "zip": "04109",
        "tier": "STRATEGIC",
        "heroImage": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop"
    }
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = "€" + target.price_start + (target.price_start < 500 ? "/m²" : "");
    const priceDesc = "Kostenloses Angebot";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} ${target.name}`,
        domain: `${target.slug}.localhost`, // rewrite target
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: target.zip.substring(0, 2),
        region: "Deutschland",
        description: `${target.heroTitle} ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "BAFA Förderung",
            "Rendimiento Garanti",
            "Certificación RGE/FIDE",
            "Garantía total",
            "Estudio Gratis"
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
        phoneNumber: "01 84 80 00 00",
        email: "contact@expertwaermepumpe.de",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} ${target.name} | ${priceDisplay}`,
            description: `${target.heroTitle} ${target.name} ${target.zip}.`
        }
    };
}
