"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({ city }: { city?: string }) {
    const cityText = city ? ` in ${city}` : "";
    const faqs = [
        {
            question: "Lohnt sich eine Wärmepumpe" + cityText + "?",
            answer: "Ja, Wärmepumpen sind die zukunftssicherste Heiztechnologie. Sie nutzen bis zu 75% Umweltenergie und sparen langfristig erhebliche Heizkosten, besonders beim Austausch einer alten Öl- oder Gasheizung."
        },
        {
            question: "Wie hoch ist die BAFA Förderung für eine Wärmepumpe?",
            answer: "Die staatliche Förderung über die KfW und das BAFA beträgt 2026 bis zu 70% der Investitionskosten für die neue Wärmepumpe. Dies beinhaltet die Grundförderung sowie verschiedene Boni wie den Geschwindigkeitsbonus."
        },
        {
            question: "Funktioniert eine Wärmepumpe auch bei Minusgraden im Winter?",
            answer: "Ja, moderne Luft-Wasser-Wärmepumpen arbeiten hocheffizient selbst bei extremen Außentemperaturen von bis zu -20°C. Sie entziehen der Luft auch im tiefsten Winter noch ausreichend Nutzwärme."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Häufig gestellte Fragen</h2>
                    <p className="text-slate-600">Alles, was Sie über Ihr Wärmepumpen-Projekt wissen müssen.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                            <FAQItem question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                <span className="font-bold text-slate-900 pr-8">{question}</span>
                {isOpen ? <Minus className="w-5 h-5 text-amber-600 shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
            </button>
            {isOpen && <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 mt-2">{answer}</div>}
        </div>
    );
}
