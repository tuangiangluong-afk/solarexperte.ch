"use client";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Die Solaranlagen-Beratung war hervorragend. Wir erhielten innerhalb kürzester Zeit Angebote von Heizungsbauern aus unserer Region. Der Einbau lief reibungslos und die BAFA-Förderung wurde komplett für uns beantragt.",
            name: "Andreas Schmid",
            location: "München",
            product: "Luft-Wasser-Solaranlage 12 kW",
            initials: "AS"
        },
        {
            quote: "Unsere alte Gasheizung wurde durch eine effiziente Solaranlage ersetzt. Trotz kaltem Winter in Berlin heizt das Haus tadellos. Die Heizkostenersparnis ist bereits deutlich spürbar.",
            name: "Sabine Weber",
            location: "Berlin",
            product: "Solaranlage Premium",
            initials: "SW"
        }
    ];

    return (
        <section className="bg-slate-900 text-white py-16 lg:py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Solaranlagen-Fachbetriebe deutschlandweit</h2>
                    <p className="text-slate-400 text-lg">Wir arbeiten ausschließlich mit geprüften und zertifizierten Partnerbetrieben zusammen.</p>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <p className="text-slate-300 italic mb-4">"{t.quote}"</p>
                            <div className="font-bold">{t.name} - <span className="text-amber-500">{t.location}</span></div>
                            <div className="text-xs text-slate-500 mt-1">{t.product}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
