import { CityConfig } from "@/lib/db";

export const NATIONAL_CONFIG: CityConfig = {
    slug: "home",
    domain: "expertwaermepumpe.de",
    name: "Wärmepumpe Experte",
    city: "France",
    phoneNumber: "01 84 80 00 00",
    email: "contact@expertwaermepumpe.de",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    description: "Le réseau n°1 d'installateurs de pompes à chaleur en France. Devis gratuit, étude de rentabilité et artisans certifiés RGE.",
    meta: {
        title: "Wärmepumpe Experte | Chauffage Écologique & Économies d'Énergie",
        description: "Installation de pompes à chaleur pour particuliers partout en France. Devis gratuit sous 24h. Simulateur d'éligibilité aux aides RGE QualiPAC."
    },
    features: [
        "Rendement Garanti",
        "Devis Gratuit sous 24h",
        "Éligible MaPrimeRénov'",
        "Artisans RGE QualiPAC"
    ],
    pricing: {
        base: "Sur Devis",
        description: "Devis gratuit personnalisé selon votre chauffage actuel"
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
