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
    "city-1": {
        ..._hubConfig,
        slug: "city-1",
        city: "City 1",
        region: "Region 1"
    },
    "city-2": {
        ..._hubConfig,
        slug: "city-2",
        city: "City 2",
        region: "Region 1"
    },
    "city-3": {
        ..._hubConfig,
        slug: "city-3",
        city: "City 3",
        region: "Region 1"
    },
    "city-4": {
        ..._hubConfig,
        slug: "city-4",
        city: "City 4",
        region: "Region 1"
    },
    "city-5": {
        ..._hubConfig,
        slug: "city-5",
        city: "City 5",
        region: "Region 1"
    },
    "city-6": {
        ..._hubConfig,
        slug: "city-6",
        city: "City 6",
        region: "Region 1"
    },
    "city-7": {
        ..._hubConfig,
        slug: "city-7",
        city: "City 7",
        region: "Region 1"
    },
    "city-8": {
        ..._hubConfig,
        slug: "city-8",
        city: "City 8",
        region: "Region 1"
    },
    "city-9": {
        ..._hubConfig,
        slug: "city-9",
        city: "City 9",
        region: "Region 1"
    },
    "city-10": {
        ..._hubConfig,
        slug: "city-10",
        city: "City 10",
        region: "Region 1"
    },
    "city-11": {
        ..._hubConfig,
        slug: "city-11",
        city: "City 11",
        region: "Region 1"
    },
    "city-12": {
        ..._hubConfig,
        slug: "city-12",
        city: "City 12",
        region: "Region 1"
    },
    "city-13": {
        ..._hubConfig,
        slug: "city-13",
        city: "City 13",
        region: "Region 1"
    },
    "city-14": {
        ..._hubConfig,
        slug: "city-14",
        city: "City 14",
        region: "Region 1"
    },
    "city-15": {
        ..._hubConfig,
        slug: "city-15",
        city: "City 15",
        region: "Region 1"
    },
    "city-16": {
        ..._hubConfig,
        slug: "city-16",
        city: "City 16",
        region: "Region 1"
    },
    "city-17": {
        ..._hubConfig,
        slug: "city-17",
        city: "City 17",
        region: "Region 1"
    },
    "city-18": {
        ..._hubConfig,
        slug: "city-18",
        city: "City 18",
        region: "Region 1"
    },
    "city-19": {
        ..._hubConfig,
        slug: "city-19",
        city: "City 19",
        region: "Region 1"
    },
    "city-20": {
        ..._hubConfig,
        slug: "city-20",
        city: "City 20",
        region: "Region 1"
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
