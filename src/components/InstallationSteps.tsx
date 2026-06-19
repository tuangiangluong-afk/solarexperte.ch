"use client";
export default function InstallationSteps() {
    const steps = [
        { title: "1. Heizungs-Check", desc: "Erstellen Sie Ihre Anfrage und prüfen Sie sofort Ihre ungefähre Förderung online." },
        { title: "2. Experten-Besuch", desc: "Ein Partner-Installateur prüft Ihre Gegebenheiten vor Ort und erstellt ein Festpreisangebot." },
        { title: "3. Installation & Förderung", desc: "Alte Heizung raus, Wärmepumpe rein – inklusive kompletter Unterstützung beim BAFA-Förderantrag." }
    ];
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-12">In 3 einfachen Schritten zur neuen Heizung</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((s, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg text-amber-500 mb-2">{s.title}</h3>
                            <p className="text-slate-600 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
