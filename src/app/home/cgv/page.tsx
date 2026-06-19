import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales de Vente - Wärmepumpe Experte",
    description: "Consultez les CGV du réseau Wärmepumpe Experte : mise en relation avec des installateurs certifiés RGE QualiPAC, devis gratuits.",
};

export default function CGV() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-neutral-900">
            {/* Header */}
            <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/90 px-4 py-3 backdrop-blur-md text-white">
                <div className="container mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-bold hover:text-rose-400 transition"
                    >
                        <ArrowLeft size={16} />
                        Retour Accueil
                    </Link>
                    <span className="text-sm font-bold">
                        Wärmepumpe Experte<span className="text-rose-500">.</span>
                    </span>
                </div>
            </nav>

            <main className="container mx-auto max-w-3xl px-4 py-12 lg:py-20">
                <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                    Conditions Générales de Vente (CGV)
                </h1>

                <div className="prose prose-neutral prose-lg max-w-none">
                    <div className="mb-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                        <p className="text-sm text-neutral-500">Dernière mise à jour : 25/01/2026</p>
                        <p>
                            Les présentes Conditions Générales de Vente régissent les relations contractuelles entre la société <strong>WELINK TECH</strong>, sise au 6 RUE DES BATELIERS, 92110 CLICHY (SIREN 984 800 136), ci-après &quot;L&apos;Éditeur&quot;, et toute personne utilisant le site <strong>Wärmepumpe Experte</strong> pour la mise en relation avec des installateurs pompes à chaleur certifiés RGE.
                        </p>
                    </div>

                    <div className="mb-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-rose-900">1. Objet et Acceptation</h2>
                        <p>
                            Le service proposé est la mise en relation avec des installateurs professionnels certifiés RGE QualiPAC spécialisés dans l&apos;étude de rentabilité, la pose et le raccordement de pompes à chaleur (Air-Eau ou Air-Air), exerçant sur l&apos;ensemble du territoire national. L&apos;utilisation du service implique l&apos;acceptation sans réserve des présentes CGV.
                        </p>
                    </div>

                    <div className="mb-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-rose-900">2. Demandes de Devis et Tarifs</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Demande de mise en relation :</strong> L'utilisateur remplit un formulaire précisant son besoin (puissance souhaitée, consommation électrique moyenne, système de chauffage actuel, simulateur d'aides).</li>
                            <li><strong>Devis gratuit :</strong> Le service de mise en relation et l'établissement des devis par nos partenaires sont gratuits pour l'utilisateur.</li>
                            <li><strong>Tarification des travaux :</strong> Le prix final de l'installation est déterminé par l'installateur RGE QualiPAC partenaire après visite technique. Les estimations de rentabilité fournies sur le site sont indicatives.</li>
                        </ul>
                    </div>

                    <div className="mb-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-rose-900">3. Responsabilité</h2>
                        <p>
                            <strong>WELINK TECH</strong> agit en qualité d&apos;intermédiaire technologique. La responsabilité de l'installation, de la conformité aux normes électriques/hydrauliques et de l'assurance décennale incombe exclusivement à l'installateur RGE partenaire ayant effectué les travaux.
                        </p>
                    </div>

                    {/* BROKER PROTECTION - Critical Legal Shield */}
                    <div className="mb-8 rounded-2xl border-2 border-rose-200 bg-rose-50 p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-rose-900">4. Nature du Service - Mise en Relation</h2>
                        <p className="font-semibold text-rose-800">
                            Wärmepumpe Experte est une <strong>plateforme de mise en relation technique</strong> entre les utilisateurs et des installateurs de pompes à chaleur indépendants.
                        </p>
                        <p className="mt-4 text-rose-700">
                            <strong>Wärmepumpe Experte n&apos;est pas une entreprise d&apos;installation ou de travaux.</strong> Les prestations de pose sont effectuées par des professionnels indépendants ou des sociétés tierces, dûment certifiés RGE et assurés.
                        </p>
                        <p className="mt-4 text-rose-700">
                            En conséquence, <strong>WELINK TECH décline toute responsabilité</strong> en cas de litige lié à l&apos;exécution des travaux, incluant mais non limité à : malfaçons, retards de pose, non-obtention des subventions de l'État (MaPrimeRénov', CEE) ou tout dommage survenu pendant l'installation.
                        </p>
                        <p className="mt-4 text-sm text-rose-600">
                            L&apos;utilisateur reconnaît que sa relation contractuelle pour les travaux is établie directement avec l'entreprise d'installation sélectionnée.
                        </p>
                    </div>

                    <div className="mb-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-rose-900">5. Loi Applicable</h2>
                        <p>
                            Les présentes CGV sont soumises au droit français. Tout litige relève des tribunaux compétents de Nanterre.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
