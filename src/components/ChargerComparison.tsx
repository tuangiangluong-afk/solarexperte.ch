"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap, Shield, Award, Thermometer, Flame, TrendingDown } from "lucide-react";

interface PACSpec {
    icon: React.ReactNode;
    label: string;
}

interface PAC {
    name: string;
    tagline: string;
    image: string;
    cop: string;
    specs: PACSpec[];
    popular?: boolean;
}

const pacModels: PAC[] = [
    {
        name: "Daikin Altherma 3 H HT",
        tagline: "Haute Température (jusqu'à 70°C) - Idéal Rénovation",
        image: "/images/generated/pac-realization-1.png",
        cop: "COP de 4.85",
        specs: [
            { icon: <Thermometer className="w-5 h-5" />, label: "Haute Température 70°C" } ,
            { icon: <TrendingDown className="w-5 h-5" />, label: "COP Exceptionnel: 4.85" },
            { icon: <Award className="w-5 h-5" />, label: "Garantie Compresseur 5 ans" },
        ],
    },
    {
        name: "Mitsubishi Ecodan Duo",
        tagline: "Basse Température & Eau Chaude Intégrée",
        image: "/images/generated/pac-realization-3.png",
        cop: "COP de 5.0",
        popular: true,
        specs: [
            { icon: <Flame className="w-5 h-5" />, label: "Chauffage & Eau Chaude (ECS)" },
            { icon: <TrendingDown className="w-5 h-5" />, label: "Technologie Zubadan (maintien)" },
            { icon: <Shield className="w-5 h-5" />, label: "Classe Énergétique A+++" },
        ],
    },
    {
        name: "Atlantic Alfea Extensa AI",
        tagline: "Excellent rapport qualité/prix pour maisons",
        image: "/images/generated/pac-realization-4.png",
        cop: "COP de 4.5",
        specs: [
            { icon: <Zap className="w-5 h-5" />, label: "Technologie Inverter connectée" },
            { icon: <Thermometer className="w-5 h-5" />, label: "Fluide Écologique R32" },
            { icon: <Shield className="w-5 h-5" />, label: "Éligible aux aides maximales" },
        ],
    },
];

interface ChargerComparisonProps {
    themeColor?: string;
    onCompareClick?: () => void;
}

export default function ChargerComparison({ themeColor = "rose", onCompareClick }: ChargerComparisonProps) {
    const scrollToForm = () => {
        const form = document.getElementById("simulateur");
        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
        onCompareClick?.();
    };

    return (
        <section className="w-full bg-white py-16 lg:py-24 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            Comparez les meilleures Pompes à Chaleur
                        </h2>
                        <p className="text-slate-500">
                            Nous collaborons avec les fabricants leaders pour vous garantir performance énergétique et durabilité.
                        </p>
                    </div>
                </div>

                {/* PAC Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pacModels.map((pac, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col gap-6 rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${pac.popular
                                ? "border-2 border-rose-500 bg-white shadow-lg ring-1 ring-rose-500/20"
                                : "border border-slate-200 bg-slate-50 hover:bg-white"
                                }`}
                        >
                            {/* Popular Badge */}
                            {pac.popular && (
                                <div className="absolute top-4 right-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                                    POPULAIRE
                                </div>
                            )}

                            {/* Image */}
                            <div className="h-48 w-full rounded-lg bg-slate-100 overflow-hidden relative">
                                <Image
                                    src={pac.image}
                                    alt={pac.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Title */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold text-slate-900">{pac.name}</h3>
                                <p className="text-slate-500 text-sm">{pac.tagline}</p>
                            </div>

                            {/* Specs */}
                            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4">
                                {pac.specs.map((spec, specIndex) => (
                                    <div key={specIndex} className="flex items-center gap-3 text-sm text-slate-700">
                                        <span className="text-rose-600">{spec.icon}</span>
                                        <span className="font-medium">{spec.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <button
                                onClick={scrollToForm}
                                className={`mt-auto w-full font-bold h-10 rounded-lg transition-colors ${pac.popular
                                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                                    : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                                    }`}
                            >
                                Obtenir mon devis
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
