"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
    city?: string;
    type?: string;
    themeColor?: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose';
}

export default function FAQ({ city, type, themeColor = 'rose' }: FAQProps) {
    const questions = [
        {
            q: "Combien coûte l'installation d'une pompe à chaleur ?",
            a: "Le coût d'installation d'une pompe à chaleur (PAC) Air-Eau oscille généralement entre 10 000€ et 16 000€ TTC selon la surface à chauffer. Grâce aux subventions de l'État (MaPrimeRénov', CEE), le reste à charge peut être réduit à moins de 3 000€ pour les foyers aux revenus modestes."
        },
        {
            q: "Quelles sont les aides financières disponibles en 2026 ?",
            a: "Pour le remplacement d'un chauffage fossile (fioul ou gaz), vous pouvez cumuler MaPrimeRénov' (jusqu'à 9 000€), la prime CEE (jusqu'à 5 000€), l'éco-prêt à taux zéro (éco-PTZ) jusqu'à 50 000€ et une TVA réduite à 5.5% appliquée directement sur la facture de pose."
        },
        {
            q: "Quelle est la durée de vie d'une pompe à chaleur ?",
            a: "Une pompe à chaleur a une durée de vie moyenne de 15 à 20 ans. Pour optimiser ses performances et sa longévité, il est recommandé de souscrire à un contrat d'entretien annuel auprès d'un technicien certifié."
        },
        {
            q: "Ma maison est-elle adaptée à l'installation d'une PAC ?",
            a: "Les pompes à chaleur s'adaptent à la majorité des logements. L'idéal est de disposer d'un système de chauffage central existant (radiateurs hydrauliques ou plancher chauffant) et d'un espace extérieur dégagé (jardin, cour, cour intérieure) pour positionner l'unité extérieure."
        },
        {
            q: "Pourquoi choisir un installateur certifié RGE QualiPAC ?",
            a: "La certification RGE (Reconnu Garant de l'Environnement) option QualiPAC garantit que l'artisan maîtrise la pose de ces systèmes et respecte les normes thermiques. Elle est également obligatoire pour bénéficier des subventions de l'État."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const themeStyles = {
        blue: "bg-blue-100 text-blue-700",
        emerald: "bg-emerald-100 text-emerald-700",
        amber: "bg-amber-100 text-amber-800",
        purple: "bg-purple-100 text-purple-700",
        rose: "bg-amber-100 text-amber-800"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };
    const badgeClass = themeStyles[themeColor] || themeStyles.rose;

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${badgeClass}`}>
                        Questions Fréquentes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Des questions sur les pompes à chaleur ?
                    </h2>
                    <p className="text-xl text-slate-600 mt-4">
                        Nous avons réuni les réponses pour vous guider dans votre projet de transition énergétique.
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-lg text-slate-900 pr-8">{item.q}</span>
                                <ChevronDown
                                    className={`text-slate-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>

                            <div
                                className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                `}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
