export interface SiteConfig {
    slug: string;
    domain: string;
    aliases?: string[];
    city: string;
    postalCode: string;
    department: string;
    region: string;
    name: string;
    phoneNumber: string;
    email: string;
    targetType: 'SOLAR' | 'MIXED' | 'PMP' | 'CONCRETE';
    priceRange: 'STANDARD' | 'PREMIUM' | 'LUXE';
    theme: 'premium' | 'trust';
    heroImage: string;
    description: string;
    meta: {
        title: string;
        description: string;
    };
    certifications: string[];
    aidesDisponibles: string[];
    features: string[];
    localKeywords: string[];
    quartiers: string[];
    coproprietes: string[];
    centresCommerciaux: string[];
    ga_id?: string;
    gtm_id?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

const TEMPLATE_CERTIFICATIONS = [
    "Zertifizierte Fachpartner",
    "Meyer Burger Module",
    "Garantierte Leistung"
];
const TEMPLATE_AIDES = [
    "Kantonale Förderung",
    "Steuerlicher Abzug",
    "Pronovo EIV"
];
const TEMPLATE_FEATURES = [
    "Kostenlose Ertragsanalyse",
    "Schnelle Montage",
    "Wechselrichter & Speicher"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: "solarexperte.ch",
    city: "Schweiz",
    postalCode: "",
    department: "",
    region: "National",
    name: "Solar Experte",
    phoneNumber: "044 500 00 00",
    email: "kontakt@solarexperte.ch",
    targetType: "SOLAR",
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/solar-hero.webp",
    description: "Top-Installateure für Photovoltaik in der Schweiz. Sichern Sie sich staatliche Förderungen.",
    meta: {
        title: "Solar Experte | Angebote vergleichen",
        description: "Top-Installateure für Photovoltaik in der Schweiz. Sichern Sie sich staatliche Förderungen."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
    "solaranlage",
    "photovoltaik"
],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 46.22, lng: 2.21 }
};

export const SITES: Record<string, SiteConfig> = {
    "z-rich": {
        ..._hubConfig,
        slug: "z-rich",
        city: "Zürich",
        postalCode: "8001",
        region: "Zürich",
        department: "Zürich",
        coordinates: { lat: 47.3769, lng: 8.5417 }
    },
    "gen-ve": {
        ..._hubConfig,
        slug: "gen-ve",
        city: "Genève",
        postalCode: "1201",
        region: "Genève",
        department: "Genève",
        coordinates: { lat: 46.2044, lng: 6.1432 }
    },
    "basel": {
        ..._hubConfig,
        slug: "basel",
        city: "Basel",
        postalCode: "4051",
        region: "Basel-Stadt",
        department: "Basel-Stadt",
        coordinates: { lat: 47.5596, lng: 7.5886 }
    },
    "lausanne": {
        ..._hubConfig,
        slug: "lausanne",
        city: "Lausanne",
        postalCode: "1003",
        region: "Vaud",
        department: "Vaud",
        coordinates: { lat: 46.5197, lng: 6.6323 }
    },
    "bern": {
        ..._hubConfig,
        slug: "bern",
        city: "Bern",
        postalCode: "3011",
        region: "Bern",
        department: "Bern",
        coordinates: { lat: 46.948, lng: 7.4474 }
    },
    "winterthur": {
        ..._hubConfig,
        slug: "winterthur",
        city: "Winterthur",
        postalCode: "8400",
        region: "Zürich",
        department: "Winterthur",
        coordinates: { lat: 47.4982, lng: 8.7241 }
    },
    "luzern": {
        ..._hubConfig,
        slug: "luzern",
        city: "Luzern",
        postalCode: "6003",
        region: "Luzern",
        department: "Luzern",
        coordinates: { lat: 47.0502, lng: 8.3093 }
    },
    "st-gallen": {
        ..._hubConfig,
        slug: "st-gallen",
        city: "St. Gallen",
        postalCode: "9000",
        region: "St. Gallen",
        department: "St. Gallen",
        coordinates: { lat: 47.4245, lng: 9.3767 }
    },
    "lugano": {
        ..._hubConfig,
        slug: "lugano",
        city: "Lugano",
        postalCode: "6900",
        region: "Ticino",
        department: "Lugano",
        coordinates: { lat: 46.0037, lng: 8.9511 }
    },
    "biel-bienne": {
        ..._hubConfig,
        slug: "biel-bienne",
        city: "Biel/Bienne",
        postalCode: "2502",
        region: "Bern",
        department: "Biel",
        coordinates: { lat: 47.1368, lng: 7.2468 }
    },
    "thun": {
        ..._hubConfig,
        slug: "thun",
        city: "Thun",
        postalCode: "3600",
        region: "Bern",
        department: "Thun",
        coordinates: { lat: 46.757, lng: 7.6276 }
    },
    "bellinzona": {
        ..._hubConfig,
        slug: "bellinzona",
        city: "Bellinzona",
        postalCode: "6500",
        region: "Ticino",
        department: "Bellinzona",
        coordinates: { lat: 46.1913, lng: 9.0238 }
    },
    "k-niz": {
        ..._hubConfig,
        slug: "k-niz",
        city: "Köniz",
        postalCode: "3098",
        region: "Bern",
        department: "Bern",
        coordinates: { lat: 46.9248, lng: 7.4124 }
    },
    "fribourg": {
        ..._hubConfig,
        slug: "fribourg",
        city: "Fribourg",
        postalCode: "1700",
        region: "Fribourg",
        department: "Fribourg",
        coordinates: { lat: 46.8065, lng: 7.162 }
    },
    "schaffhausen": {
        ..._hubConfig,
        slug: "schaffhausen",
        city: "Schaffhausen",
        postalCode: "8200",
        region: "Schaffhausen",
        department: "Schaffhausen",
        coordinates: { lat: 47.6973, lng: 8.6349 }
    },
    "chur": {
        ..._hubConfig,
        slug: "chur",
        city: "Chur",
        postalCode: "7000",
        region: "Graubünden",
        department: "Plessur",
        coordinates: { lat: 46.8503, lng: 9.5315 }
    },
    "vernier": {
        ..._hubConfig,
        slug: "vernier",
        city: "Vernier",
        postalCode: "1214",
        region: "Genève",
        department: "Genève",
        coordinates: { lat: 46.2167, lng: 6.0833 }
    },
    "uster": {
        ..._hubConfig,
        slug: "uster",
        city: "Uster",
        postalCode: "8610",
        region: "Zürich",
        department: "Uster",
        coordinates: { lat: 47.3486, lng: 8.718 }
    },
    "sion": {
        ..._hubConfig,
        slug: "sion",
        city: "Sion",
        postalCode: "1950",
        region: "Valais",
        department: "Sion",
        coordinates: { lat: 46.2293, lng: 7.3585 }
    },
    "neuch-tel": {
        ..._hubConfig,
        slug: "neuch-tel",
        city: "Neuchâtel",
        postalCode: "2000",
        region: "Neuchâtel",
        department: "Neuchâtel",
        coordinates: { lat: 46.9929, lng: 6.931 }
    },
    "solarexperte.ch": _hubConfig,
    "www.solarexperte.ch": _hubConfig,
    "home": _hubConfig
};

export const getSiteConfig = (hostnameOrSlug: string): SiteConfig | null => {
    let hostname = hostnameOrSlug.split(':')[0];
    hostname = hostname.replace(/^www\./, '');
    const bySlug = Object.values(SITES).find(s => s.slug === hostname);
    if (bySlug) return bySlug;
    if (SITES[hostname]) return SITES[hostname];
    return _hubConfig;
};

export const getSiteBySlug = (slug: string): SiteConfig | null => Object.values(SITES).find(s => s.slug === slug) || null;
export const getSatelliteSites = (): SiteConfig[] => [];
export const isMainHub = (hostname: string): boolean => true;
export const getHubConfig = (): SiteConfig => _hubConfig;
