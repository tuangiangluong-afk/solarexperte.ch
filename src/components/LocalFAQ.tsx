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
                        Häufige Fragen in {city}
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Alles über Photovoltaik und Eigenverbrauch in Ihrer Gemeinde.
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

function cityHash(city: string): number {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
        hash = ((hash << 5) - hash + city.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}

export function getLocalFAQData(city: string, department: string | undefined, segment: "B2C" | "COPRO" | "ENTREPRISE") {
    const dept = department || "";
    const h = cityHash(city);
    const installCount = 40 + (h % 80);

    return [
        {
            question: `Wie viel kostet eine Solaranlage in ${city}?`,
            answer: `Für ein Einfamilienhaus in ${city} betragen die Kosten für eine Photovoltaikanlage typischerweise zwischen 15'000 und 28'000 CHF, je nach Dachgrösse und ob ein Speicher integriert wird.`
        },
        {
            question: `Wie schnell kann die Anlage in ${city} installiert werden?`,
            answer: `Nach Genehmigung durch das lokale Elektrizitätswerk dauert die eigentliche Installation auf dem Dach in ${city} meist nur 2 Tage. Wir haben bereits ${installCount} Anlagen in Ihrer Region gebaut.`
        },
        {
            question: `Gibt es Fördergelder in ${city}?`,
            answer: `Ja, in der ganzen Schweiz und somit auch in ${city} profitieren Sie von der Pronovo Einmalvergütung (EIV), die bis zu 30% der Investitionskosten abdecken kann.`
        }
    ];
}
