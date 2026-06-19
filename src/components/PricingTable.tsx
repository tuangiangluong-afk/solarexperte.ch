"use client";
export default function PricingTable() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-6">Wärmepumpen Richtpreise 2026</h2>
                <p className="text-center text-slate-500 mb-12">Ungefähre Anschaffungskosten einer Luft-Wasser-Wärmepumpe für ein Einfamilienhaus.</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-bold border border-slate-200">Heizleistung & Haustyp</th>
                                <th className="p-4 font-bold border border-slate-200">Kosten vor Förderung</th>
                                <th className="p-4 font-bold border border-slate-200">Effektiver Preis nach BAFA (70% Max)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border border-slate-200">8 kW (Reihenhaus, guter Dämmstandard)</td>
                                <td className="p-4 border border-slate-200">ca. 24.000 €</td>
                                <td className="p-4 border border-slate-200" style={{color: 'green', fontWeight: 'bold'}}>ab 9.000 €</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-slate-200">12 kW (Einfamilienhaus, Altbau teilsaniert)</td>
                                <td className="p-4 border border-slate-200">ca. 29.000 €</td>
                                <td className="p-4 border border-slate-200" style={{color: 'green', fontWeight: 'bold'}}>ab 11.500 €</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
