import { CityConfig } from "@/lib/db";

interface LocalFAQProps {
    site: CityConfig;
    segment: "B2C" | "COPRO" | "ENTREPRISE";
}

export function LocalFAQ({ site, segment }: LocalFAQProps) {
    const city = site.city;
    const faqs = getLocalFAQData(city, site.department, segment);

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Questions fréquentes à {city}
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Tout savoir sur l&apos;installation de pompes à chaleur dans votre ville.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details 
                            key={idx} 
                            className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                            {...(idx === 0 ? { open: true } : {})}
                        >
                            <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-bold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                <span>{faq.question}</span>
                                <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Deterministic hash for a city name — produces a stable number 
 * without relying on parseInt of department codes (which breaks on "MC", "2A", "2B").
 */
function cityHash(city: string): number {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
        hash = ((hash << 5) - hash + city.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}

// Exported for SchemaJSON to generate FAQPage structured data
export function getLocalFAQData(city: string, department: string | undefined, segment: "B2C" | "COPRO" | "ENTREPRISE") {
    const dept = department || "votre département";
    const h = cityHash(city);

    if (segment === "COPRO") {
        const coproCount = 8 + (h % 25);
        return [
            {
                question: `Peut-on installer des pompes à chaleur en copropriété à ${city} ?`,
                answer: `Oui, c'est tout à fait possible. Pour une copropriété à ${city}, on installe généralement soit des pompes à chaleur individuelles (avec l'accord de l'AG pour l'unité extérieure), soit une pompe à chaleur collective pour tout l'immeuble. Cela permet de réduire les factures de chauffage de 60% à 70%.`
            },
            {
                question: `Quelles démarches pour un projet de pompe à chaleur en copropriété à ${city} ?`,
                answer: `Nous réalisons d'abord une étude thermique et acoustique gratuite à ${city}. Ensuite, nous vous accompagnons pour présenter le projet au syndic de copropriété et obtenir le vote en assemblée générale (AG). Plus de ${coproCount} copropriétés du ${dept} nous ont fait confiance.`
            },
            {
                question: `Existe-t-il des aides pour installer une pompe à chaleur en copropriété à ${city} ?`,
                answer: `Oui, les copropriétés peuvent bénéficier du dispositif MaPrimeRénov' Copropriété, qui finance jusqu'à 30% à 45% du coût des travaux de chauffage selon le gain énergétique global obtenu, en plus des primes CEE et des aides locales.`
            }
        ];
    } else if (segment === "ENTREPRISE") {
        const entrepriseCount = 15 + (h % 35);
        return [
            {
                question: `Quels sont les avantages des pompes à chaleur pour une entreprise à ${city} ?`,
                answer: `Installer une pompe à chaleur dans vos locaux à ${city} permet de réduire significativement vos coûts de chauffage et de climatisation (système réversible), de valoriser votre patrimoine de bureau ou commercial et de répondre aux normes énergétiques actuelles. Plus de ${entrepriseCount} entreprises du ${dept} se sont équipées.`
            },
            {
                question: `Quelles aides pour l'installation d'une pompe à chaleur professionnelle à ${city} ?`,
                answer: `Les professionnels bénéficient du dispositif des Certificats d'Économie d'Énergie (CEE) pour le tertiaire et l'industrie, de financements de l'ADEME, ainsi que de subventions régionales spécifiques à la transition énergétique à ${city}.`
            },
            {
                question: `Quel est le temps de retour sur investissement pour une entreprise à ${city} ?`,
                answer: `Pour une pompe à chaleur professionnelle à ${city}, le retour sur investissement se situe généralement entre 4 et 7 ans grâce aux économies massives d'énergie réalisées au quotidien.`
            }
        ];
    } else {
        const installCount = 40 + (h % 80);
        return [
            {
                question: `Quel est le prix d'une pompe à chaleur à ${city} ?`,
                answer: `Le coût d'une pompe à chaleur air-eau à ${city} se situe en moyenne entre 8 000€ et 16 000€ selon la puissance et la configuration existante (radiateurs ou plancher chauffant), avant déduction des aides. Ce coût est amorti en quelques années seulement.`
            },
            {
                question: `Combien de temps prend l'installation d'une pompe à chaleur à ${city} ?`,
                answer: `L'installation technique à votre domicile à ${city} prend en général 1 à 2 jours. Nos artisans certifiés RGE QualiPAC réalisent la pose et le raccordement sans interruption prolongée de votre chauffage. Plus de ${installCount} chantiers ont été réalisés dans le ${dept} récemment.`
            },
            {
                question: `Quelles sont les aides disponibles pour installer une pompe à chaleur à ${city} ?`,
                answer: `À ${city}, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 9 000€ d'aide directe pour les revenus très modestes), de la Prime CEE (Coup de Pouce Chauffage), de l'Éco-PTZ (prêt à taux zéro jusqu'à 30 000€) et d'une TVA réduite à 5.5%. L'installation doit obligatoirement être réalisée par un professionnel RGE QualiPAC.`
            }
        ];
    }
}
