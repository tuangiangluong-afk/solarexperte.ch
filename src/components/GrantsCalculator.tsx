"use client";

import { useState, useEffect } from "react";
import { Euro, ArrowRight, CheckCircle, Minus } from "lucide-react";

interface GrantsCalculatorProps {
    themeColor?: string;
    onCalculateClick?: () => void;
}

export default function GrantsCalculator({ themeColor = "rose", onCalculateClick }: GrantsCalculatorProps) {
    const [animatedCost, setAnimatedCost] = useState(14000);
    const [isVisible, setIsVisible] = useState(false);

    const installationCost = 14000;
    const taxCredit = 8000; // MaPrimeRénov'
    const advenir = 4000; // CEE
    const finalCost = Math.max(0, installationCost - taxCredit - advenir);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    // Animate the cost down
                    let current = installationCost;
                    const step = (installationCost - finalCost) / 30;
                    const interval = setInterval(() => {
                        current -= step;
                        if (current <= finalCost) {
                            setAnimatedCost(finalCost);
                            clearInterval(interval);
                        } else {
                            setAnimatedCost(Math.round(current));
                        }
                    }, 50);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById("grants-calculator");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const scrollToForm = () => {
        const form = document.getElementById("simulateur");
        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
        onCalculateClick?.();
    };

    return (
        <section id="grants-calculator" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left: Content */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-3 py-1.5 rounded-full text-sm font-bold w-fit">
                        <Euro className="w-4 h-4" />
                        Aides gouvernementales
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                        Réduisez vos coûts d&apos;installation grâce aux subventions de l&apos;État
                    </h2>

                    <p className="text-lg text-slate-600">
                        En France, l&apos;installation d&apos;une pompe à chaleur est fortement subventionnée pour encourager la transition énergétique. Nos installateurs certifiés RGE s&apos;occupent de monter et déduire les dossiers d&apos;aides directement de votre facture.
                    </p>

                    {/* Grant Items */}
                    <div className="flex flex-col gap-4 mt-4">
                        {/* MaPrimeRénov' */}
                        <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <div className="bg-rose-100 text-rose-600 h-12 w-12 rounded-lg flex items-center justify-center shrink-0">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">MaPrimeRénov&apos;</h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Subvention principale de l&apos;Anah allant jusqu&apos;à 9 000€ pour le remplacement d&apos;un chauffage fossile par une PAC Air-Eau.
                                </p>
                            </div>
                        </div>

                        {/* Prime CEE */}
                        <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <div className="bg-rose-100 text-rose-600 h-12 w-12 rounded-lg flex items-center justify-center shrink-0">
                                <Euro className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Prime CEE (Certificats d&apos;Économies d&apos;Énergie)</h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Aide supplémentaire versée par les fournisseurs d&apos;énergie (jusqu&apos;à 5 000€ selon vos ressources).
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={scrollToForm}
                        className="inline-flex items-center text-rose-600 font-bold hover:underline mt-4"
                    >
                        Calculer mes aides de l&apos;État <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>

                {/* Right: Calculator Visual */}
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                        <div className="flex flex-col gap-6">
                            {/* Installation Cost */}
                            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                <span className="text-slate-500 font-medium">Coût moyen d&apos;installation</span>
                                <span className="text-slate-900 font-bold">{installationCost.toLocaleString("fr-FR")} €</span>
                            </div>

                            {/* MaPrimeRénov' */}
                            <div className="flex justify-between items-center text-green-600">
                                <span className="font-medium flex items-center gap-1">
                                    <Minus className="w-4 h-4" /> MaPrimeRénov&apos; (max)
                                </span>
                                <span className="font-bold">- {taxCredit.toLocaleString("fr-FR")} €</span>
                            </div>

                            {/* CEE */}
                            <div className="flex justify-between items-center text-green-600 border-b border-slate-100 pb-4">
                                <span className="font-medium flex items-center gap-1">
                                    <Minus className="w-4 h-4" /> Prime CEE (max)
                                </span>
                                <span className="font-bold">- {advenir.toLocaleString("fr-FR")} €</span>
                            </div>

                            {/* Final Cost */}
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-lg font-bold text-slate-900">Reste à charge minimum</span>
                                <span
                                    className={`text-3xl font-black text-rose-600 transition-all duration-300 ${isVisible ? "scale-110" : ""
                                        }`}
                                >
                                    {animatedCost === 0 ? "0 €*" : `${animatedCost.toLocaleString("fr-FR")} €*`}
                                </span>
                            </div>

                            <p className="text-xs text-slate-400 text-center italic">
                                *Exemple pour un foyer modeste remplaçant une chaudière fioul. Reste à charge réel variable selon revenus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
