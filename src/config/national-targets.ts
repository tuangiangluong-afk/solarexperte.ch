// ========================================
// NATIONAL TARGETS - 39 HIGH-VALUE ZONES
// Solaranlagen - Couverture Nationale pSEO (Maximized CH)
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
    unique_intro?: string;
    unique_expert_tip?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    {
        slug: "zuerich",
        name: "Zürich",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.3769, lng: 8.5417 },
        price_start: 16000,
        top_places: ["Kreis 1","Oerlikon","Enge","Seefeld"],
        zip: "8001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Zürich unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Zürich planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Zürich ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "genf",
        name: "Genève",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.2044, lng: 6.1432 },
        price_start: 17000,
        top_places: ["Eaux-Vives","Plainpalais","Pâquis","Champel"],
        zip: "1201",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Genève unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Genève planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Dank der hohen Sonnentage im Süden nahe Genève amortisiert sich eine Photovoltaikanlage oft schon in unter 8 Jahren."
    },
    {
        slug: "basel",
        name: "Basel",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.5596, lng: 7.5886 },
        price_start: 15000,
        top_places: ["Grossbasel","Kleinbasel","Gundeldingen","St. Alban"],
        zip: "4051",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Basel unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Basel planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Basel ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "bern",
        name: "Bern",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.948, lng: 7.4474 },
        price_start: 17000,
        top_places: ["Altstadt","Breitenrain","Länggasse","Kirchenfeld"],
        zip: "3011",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Bern unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Bern planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Bern sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "lausanne",
        name: "Lausanne",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.5197, lng: 6.6323 },
        price_start: 16500,
        top_places: ["Flon","Ouchy","Sallaz","Chailly"],
        zip: "1003",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Lausanne unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Lausanne planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Lausanne sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "winterthur",
        name: "Winterthur",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.4999, lng: 8.7241 },
        price_start: 15000,
        top_places: ["Stadt","Oberwinterthur","Seen","Töss"],
        zip: "8400",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Winterthur unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Winterthur planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Winterthur ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "luzern",
        name: "Luzern",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.0502, lng: 8.3093 },
        price_start: 15500,
        top_places: ["Altstadt","Neustadt","Tribschen","Littau"],
        zip: "6003",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Luzern unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Luzern planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Luzern ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "st-gallen",
        name: "St. Gallen",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.4245, lng: 9.3767 },
        price_start: 17000,
        top_places: ["Zentrum","St. Fiden","Bruggen","Rotmonten"],
        zip: "9000",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in St. Gallen unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in St. Gallen planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum St. Gallen ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "lugano",
        name: "Lugano",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.0037, lng: 8.9511 },
        price_start: 15500,
        top_places: ["Centro","Paradiso","Cassarate","Viganello"],
        zip: "6900",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Lugano unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Lugano planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Dank der hohen Sonnentage im Süden nahe Lugano amortisiert sich eine Photovoltaikanlage oft schon in unter 8 Jahren."
    },
    {
        slug: "biel",
        name: "Biel/Bienne",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.139, lng: 7.2471 },
        price_start: 17000,
        top_places: ["Zentrum","Madretsch","Bözingen","Mett"],
        zip: "2502",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Biel/Bienne unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Biel/Bienne planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Biel/Bienne ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "thun",
        name: "Thun",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.758, lng: 7.6276 },
        price_start: 17000,
        top_places: ["Bälliz","Dürrenast","Gwatt","Steffisburg"],
        zip: "3600",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Thun unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Thun planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Thun sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "koeniz",
        name: "Köniz",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.9248, lng: 7.414 },
        price_start: 15500,
        top_places: ["Zentrum","Wabern","Liebefeld","Spiegel"],
        zip: "3098",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Köniz unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Köniz planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Köniz sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "la-chaux-de-fonds",
        name: "La Chaux-de-Fonds",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.1035, lng: 6.8328 },
        price_start: 16000,
        top_places: ["Centre","Ouest","Est","Bourg"],
        zip: "2300",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in La Chaux-de-Fonds unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in La Chaux-de-Fonds planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum La Chaux-de-Fonds ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "schaffhausen",
        name: "Schaffhausen",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.6959, lng: 8.6367 },
        price_start: 16000,
        top_places: ["Altstadt","Breite","Herblingen","Buchthalen"],
        zip: "8200",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Schaffhausen unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Schaffhausen planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Schaffhausen ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "fribourg",
        name: "Fribourg",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.8065, lng: 7.1619 },
        price_start: 16500,
        top_places: ["Bourg","Pérolles","Beaumont","Schoenberg"],
        zip: "1700",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Fribourg unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Fribourg planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Fribourg sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "chur",
        name: "Chur",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.8503, lng: 9.5319 },
        price_start: 17000,
        top_places: ["Altstadt","Welschdörfli","Masans","Lürlibad"],
        zip: "7000",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Chur unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Chur planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Chur sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "neuchatel",
        name: "Neuchâtel",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.9896, lng: 6.9293 },
        price_start: 17000,
        top_places: ["Centre","Serrières","Peseux","Monruz"],
        zip: "2000",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Neuchâtel unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Neuchâtel planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Neuchâtel sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "vernier",
        name: "Vernier",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.2052, lng: 6.0963 },
        price_start: 16000,
        top_places: ["Châtelaine","Avanchet","Lignon","Cointrin"],
        zip: "1214",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Vernier unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Vernier planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Dank der hohen Sonnentage im Süden nahe Vernier amortisiert sich eine Photovoltaikanlage oft schon in unter 8 Jahren."
    },
    {
        slug: "uster",
        name: "Uster",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.3486, lng: 8.718 },
        price_start: 15000,
        top_places: ["Zentrum","Nänikon","Werrikon","Riedikon"],
        zip: "8610",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Uster unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Uster planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Uster ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "sion",
        name: "Sion",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.2293, lng: 7.3585 },
        price_start: 17000,
        top_places: ["Centre","Vissigen","Uvrier","Châteauneuf"],
        zip: "1950",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Sion unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Sion planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Dank der hohen Sonnentage im Süden nahe Sion amortisiert sich eine Photovoltaikanlage oft schon in unter 8 Jahren."
    },
    {
        slug: "lancy",
        name: "Lancy",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.1867, lng: 6.113 },
        price_start: 15000,
        top_places: ["Grand-Lancy","Petit-Lancy","Pesay","La Chapelle"],
        zip: "1212",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Lancy unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Lancy planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Dank der hohen Sonnentage im Süden nahe Lancy amortisiert sich eine Photovoltaikanlage oft schon in unter 8 Jahren."
    },
    {
        slug: "emmen",
        name: "Emmen",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.0767, lng: 8.2831 },
        price_start: 15000,
        top_places: ["Emmenbrücke","Gerliswil","Meierhöfli","Emmenbaum"],
        zip: "6020",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Emmen unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Emmen planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Emmen ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "yverdon",
        name: "Yverdon-les-Bains",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.7785, lng: 6.6412 },
        price_start: 16000,
        top_places: ["Centre","Les Bains","Cheseaux","Gressy"],
        zip: "1400",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Yverdon-les-Bains unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Yverdon-les-Bains planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Yverdon-les-Bains sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "zug",
        name: "Zug",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.1662, lng: 8.5155 },
        price_start: 16500,
        top_places: ["Zentrum","Oberwil","Gusti","Herti"],
        zip: "6300",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Zug unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Zug planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Zug ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "kriens",
        name: "Kriens",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.0353, lng: 8.2766 },
        price_start: 15500,
        top_places: ["Zentrum","Obernau","Kuonimatt","Sonnenberg"],
        zip: "6010",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Kriens unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Kriens planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Kriens ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "rapperswil",
        name: "Rapperswil-Jona",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.2266, lng: 8.818 },
        price_start: 15000,
        top_places: ["Rapperswil","Jona","Kempraten","Wagen"],
        zip: "8640",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Rapperswil-Jona unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Rapperswil-Jona planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Rapperswil-Jona ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "duebendorf",
        name: "Dübendorf",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.3975, lng: 8.618 },
        price_start: 15000,
        top_places: ["Zentrum","Stettbach","Gfenn","Zwicky"],
        zip: "8600",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Dübendorf unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Dübendorf planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Dübendorf ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "dietikon",
        name: "Dietikon",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.4057, lng: 8.4037 },
        price_start: 16500,
        top_places: ["Zentrum","Silbern","Fondli","Reppisch"],
        zip: "8953",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Dietikon unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Dietikon planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Dietikon ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "montreux",
        name: "Montreux",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.4312, lng: 6.9107 },
        price_start: 16500,
        top_places: ["Clarens","Territet","Chernex","Glion"],
        zip: "1820",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Montreux unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Montreux planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Dank der hohen Sonnentage im Süden nahe Montreux amortisiert sich eine Photovoltaikanlage oft schon in unter 8 Jahren."
    },
    {
        slug: "frauenfeld",
        name: "Frauenfeld",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.5562, lng: 8.8967 },
        price_start: 15000,
        top_places: ["Zentrum","Kurzdorf","Ergaten","Huben"],
        zip: "8500",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Frauenfeld unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Frauenfeld planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Frauenfeld ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "wetzikon",
        name: "Wetzikon",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.3204, lng: 8.7961 },
        price_start: 16500,
        top_places: ["Kempten","Robenhausen","Ettenhausen","Zentrum"],
        zip: "8620",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Wetzikon unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Wetzikon planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Wetzikon ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "baar",
        name: "Baar",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.1955, lng: 8.5255 },
        price_start: 17000,
        top_places: ["Zentrum","Inwil","Blickensdorf","Allenwinden"],
        zip: "6340",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Baar unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Baar planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Baar ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "wil",
        name: "Wil",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.4651, lng: 9.0435 },
        price_start: 16500,
        top_places: ["Zentrum","Bronschhofen","Rossrüti","Weidli"],
        zip: "9500",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Wil unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Wil planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Wil ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "meyrin",
        name: "Meyrin",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.233, lng: 6.0792 },
        price_start: 15500,
        top_places: ["Cointrin","Madoiry","Champs-Fréchets","Village"],
        zip: "1217",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Meyrin unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Meyrin planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Dank der hohen Sonnentage im Süden nahe Meyrin amortisiert sich eine Photovoltaikanlage oft schon in unter 8 Jahren."
    },
    {
        slug: "bulle",
        name: "Bulle",
        heroTitle: "Solaranlagen",
        geo: { lat: 46.6182, lng: 7.0548 },
        price_start: 15000,
        top_places: ["Centre","Tour-de-Trême","Sâles","Vuadens"],
        zip: "1630",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Bulle unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Bulle planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Profitieren Sie von den kantonalen Fördergeldern in Bulle sowie der Einmalvergütung (EIV) des Bundes für Photovoltaikanlagen."
    },
    {
        slug: "kreuzlingen",
        name: "Kreuzlingen",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.6436, lng: 9.1729 },
        price_start: 15500,
        top_places: ["Zentrum","Emmishofen","Kurzrick","Bernrain"],
        zip: "8280",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Kreuzlingen unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Kreuzlingen planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Kreuzlingen ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "waedenswil",
        name: "Wädenswil",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.2307, lng: 8.6706 },
        price_start: 15000,
        top_places: ["Zentrum","Au","Schönenberg","Hütten"],
        zip: "8820",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Wädenswil unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Wädenswil planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Wädenswil ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "riehen",
        name: "Riehen",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.5847, lng: 7.6493 },
        price_start: 15500,
        top_places: ["Zentrum","Niederholz","Bettingen","Bäumenli"],
        zip: "4125",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Riehen unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Riehen planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Riehen ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
    {
        slug: "aarau",
        name: "Aarau",
        heroTitle: "Solaranlagen",
        geo: { lat: 47.3925, lng: 8.0442 },
        price_start: 15000,
        top_places: ["Altstadt","Gönhard","Zelgli","Schachen"],
        zip: "5000",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Machen Sie sich in Aarau unabhängig von steigenden Strompreisen mit einer eigenen Solaranlage. Die Schweiz bietet hervorragende Bedingungen für Photovoltaik. Unsere lokalen Experten in Aarau planen Ihr Projekt von der ersten Beratung bis zur schlüsselfertigen Montage.",
        unique_expert_tip: "Im Raum Aarau ist die Einstrahlung im Sommer besonders hoch. Ein Batteriespeicher lohnt sich hier besonders, um den produzierten Solarstrom auch abends nutzen zu können."
    },
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = "ab CHF " + target.price_start.toLocaleString("de-CH");
    const priceDesc = "Kostenlose Offerte";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} in ${target.name}`,
        domain: `${target.slug}.solarexperte.ch`, 
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: "CH",
        region: "Schweiz",
        description: `${target.heroTitle} in ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "Kostenlose Offerte",
            "Lokale Experten",
            "Schweizer Qualität"
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
        phoneNumber: "0800 000 000",
        email: "kontakt@solarexperte.ch",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} Installateur in ${target.name} | ${priceDisplay}`,
            description: `${target.heroTitle} in ${target.name} ${target.zip}. Unabhängig von Strompreisen.`
        },
        unique_intro: target.unique_intro,
        unique_expert_tip: target.unique_expert_tip
    };
}
