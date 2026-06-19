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
