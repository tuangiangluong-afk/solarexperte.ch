/**
 * Site Configuration for Wärmepumpe Experte
 */

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
    "VDI 4645",
    "BAFA gelistet",
    "Fachbetrieb Innung"
];
const TEMPLATE_AIDES = [
    "BAFA Förderung (bis zu 70%)",
    "KfW-Heizungsförderung",
    "Klimafreundliche Wärme"
];
const TEMPLATE_FEATURES = [
    "Kostenloses Angebot in 24h",
    "Deutsche Qualität & Zuverlässigkeit",
    "BAFA Förderung komplett geregelt",
    "Erfahrene Wärmepumpen-Installateure",
    "Garantierter Festpreis"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: "expertwaermepumpe.de",
    city: "Deutschland",
    postalCode: "",
    department: "",
    region: "National",
    name: "Wärmepumpe Experte",
    phoneNumber: "01 84 80 00 00",
    email: "contact@expertwaermepumpe.de",
    targetType: "MIXED",
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/pac-hero.webp",
    description: "Deutschlands führendes Portal für Wärmepumpen-Installateure. Kostenloses Angebot und BAFA Förderung.",
    meta: {
        title: "Wärmepumpe Experte | Wärmepumpe & BAFA Förderung DE",
        description: "Wärmepumpen-Installation für Ihr Eigenheim. Angebote einholen und staatliche Zuschüsse sichern."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
    "waermepumpe installieren",
    "waermepumpe kaufen preis",
    "waermepumpe foerderung bafa",
    "luft wasser waermepumpe",
    "waermepumpen anbieter"
],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 52.52, lng: 13.405 }
};

export const SITES: Record<string, SiteConfig> = {
    "expertwaermepumpe.de": _hubConfig,
    "www.expertwaermepumpe.de": _hubConfig,
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
