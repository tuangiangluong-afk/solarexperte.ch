import { CityConfig } from "@/lib/db";

export const NATIONAL_CONFIG: CityConfig = {
    slug: "home",
    domain: "solarexperte.ch",
    name: "Solar Experte",
    city: "Schweiz",
    phoneNumber: "0800 000 000",
    email: "kontakt@solarexperte.ch",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    description: "Das führende Vergleichsportal für Photovoltaikanlagen in der Schweiz. Kostenlose Offerte, Rentabilitätsberechnung und zertifizierte Solar-Fachbetriebe.",
    meta: {
        title: "Solar Experte | Photovoltaik & Solaranlagen Schweiz",
        description: "Installation von Solaranlagen für Eigenheime in der ganzen Schweiz. Kostenlose Offerte in 24h. Schweizer Subventionen und zertifizierte Fachpartner."
    },
    features: [
        "Garantierte Qualität",
        "Kostenlose Offerte in 24h",
        "Schweizer Förderung",
        "Zertifizierte Fachpartner"
    ],
    pricing: {
        base: "Kostenlose Offerte",
        description: "Individuelle Offerte basierend auf Ihrem Dach und Verbrauch"
    },
    hospitals: [],
    stations: [],
    neighborhoods: [],
    points_of_interest: {
        hotels: [],
        nightlife: [],
        monuments: [],
        parking_difficulty: "N/A"
    }
};
