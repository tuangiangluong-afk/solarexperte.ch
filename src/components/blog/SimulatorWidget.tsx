import { CheckCircle, Zap } from 'lucide-react';

export default function SimulatorWidget() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-amber-100 ring-1 ring-amber-500/10">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                Comparez les offres
            </h3>
            <p className="text-sm text-slate-600 mb-6">
                Recevez jusqu'à 3 kostenlose offertes d'installateurs qualifiés RGE.
            </p>

            {/* Mini Formulaire visuel */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center p-3 border rounded-lg bg-slate-50 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-colors">
                    <span className="text-sm text-slate-700 font-medium">Particulier (Maison/Copro)</span>
                </div>
                <div className="flex items-center p-3 border rounded-lg bg-slate-50 cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-colors">
                    <span className="text-sm text-slate-700 font-medium">Entreprise / Tertiaire</span>
                </div>
            </div>

            <a href="/#simulateur" className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all">
                Offerten vergleichen
            </a>
            <div className="mt-4 flex justify-center items-center gap-2 text-xs text-green-600 font-medium">
                <CheckCircle size={12} /> Kostenlos & unverbindlich
            </div>
        </div>
    );
}
