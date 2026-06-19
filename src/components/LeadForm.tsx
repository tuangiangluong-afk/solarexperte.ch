"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, User, Shield, Phone, Mail, User2, ArrowRight, ArrowLeft, CheckCircle, Thermometer, TrendingUp, Zap } from "lucide-react";

interface LeadFormProps {
    city: string;
    domain: string;
    targetType?: string;
    themeColor?: string;
    initialProjectType?: string;
}

interface FormData {
    projectType: 'proprietaire_maison' | 'coproprietaire' | 'locataire' | null;
    monthlyBill: 'plus_150' | '100_150' | 'moins_100' | null;
    roofType: 'fioul' | 'gaz' | 'electricite' | 'bois' | null;
    solarLocation: 'radiateurs' | 'plancher' | 'air' | null;
    name: string;
    email: string;
    phone: string;
    zipCode: string;
}

const PHONE_REGEX = /^(?:\+?49|0)\s*[1-9]\d{5,14}$/;
const ZIP_CODE_REGEX = /^\d{5}$/;

export default function LeadForm({ city, domain, initialProjectType }: LeadFormProps) {
    const router = useRouter();
    const [step, setStep] = useState(initialProjectType ? 2 : 1);
    const [formData, setFormData] = useState<FormData>({
        projectType: (initialProjectType as any) || null,
        monthlyBill: null,
        roofType: null,
        solarLocation: null,
        name: "",
        email: "",
        phone: "",
        zipCode: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;

    const handleOptionSelect = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage("");
        }
    };

    const canProceed = (): boolean => {
        switch (step) {
            case 1: return formData.projectType !== null;
            case 2: return formData.monthlyBill !== null;
            case 3: return formData.roofType !== null;
            case 4: return formData.solarLocation !== null;
            case 5:
                return (
                    formData.name.trim() !== "" &&
                    formData.email.includes("@") &&
                    ZIP_CODE_REGEX.test(formData.zipCode.trim()) &&
                    PHONE_REGEX.test(formData.phone.replace(/\s/g, ''))
                );
            default: return false;
        }
    };

    const nextStep = () => { if (canProceed() && step < totalSteps) setStep(step + 1); };
    const prevStep = () => { if (step > 1) setStep(step - 1); };

    const handleSubmit = async () => {
        if (!canProceed()) {
            setStatus('error');
            setErrorMessage("Bitte füllen Sie alle Felder korrekt aus.");
            return;
        }

        setStatus('loading');
        try {
            const payload = {
                ...formData,
                city,
                postalCode: formData.zipCode,
                domain,
                niche: 'pac',
                country: 'DE',
                leadScore: 60,
                timestamp: new Date().toISOString()
            };

            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('Fehler beim Senden');
            
            const data = await res.json();
            if (data?.vud?.devis_id) {
                router.push(`/success?devis_id=${data.vud.devis_id}&devis_hash=${data.vud.devis_hash || ''}`);
                return;
            }
            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Fehler');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-3xl p-8 text-center">
                <CheckCircle className="text-amber-500 mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold text-amber-800 mb-3">Erfolgreich übermittelt!</h3>
                <p className="text-neutral-700 mb-6">
                    Ihre Anfrage wurde erfolgreich übermittelt. Ein zertifizierter Wärmepumpen-Experte wird sich innerhalb von **24 Stunden** bei Ihnen melden für Ihr Projekt in **{city}**.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden font-sans">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-slate-900">
                <h3 className="font-bold text-lg">Wärmepumpen-Simulator 2026</h3>
                <div className="h-2 bg-slate-900/10 rounded-full mt-4">
                    <div className="h-full bg-slate-900 rounded-full" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className="p-6">
                {step === 1 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Wie ist Ihre Wohnsituation?</h4>
                        <button onClick={() => { handleOptionSelect('projectType', 'proprietaire_maison'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home className="text-amber-500" />
                            <div>
                                <div className="font-bold">Eigenheimbesitzer (Einfamilienhaus)</div>
                                <div className="text-sm text-neutral-500">Optimale Voraussetzungen für Wärmepumpe</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('projectType', 'coproprietaire'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Miteigentümer (Mehrfamilienhaus)</div>
                                <div className="text-sm text-neutral-500">Projekt mit Eigentümergemeinschaft</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Wie hoch sind Ihre monatlichen Heizkosten?</h4>
                        <button onClick={() => { handleOptionSelect('monthlyBill', 'plus_150'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <TrendingUp className="text-amber-500" />
                            <div>
                                <div className="font-bold">Mehr als 150 € / Monat</div>
                                <div className="text-sm text-neutral-500">Schnelle Amortisation</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('monthlyBill', '100_150'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Zwischen 100 und 150 € / Monat</div>
                                <div className="text-sm text-neutral-500">Wirtschaftliche Heizlösung</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Wie heizen Sie aktuell?</h4>
                        <button onClick={() => { handleOptionSelect('roofType', 'fioul'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Thermometer className="text-amber-500" />
                            <div>
                                <div className="font-bold">Ölheizung</div>
                                <div className="text-sm text-neutral-500">Bis zu 70% BAFA Förderung</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('roofType', 'gaz'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Thermometer />
                            <div>
                                <div className="font-bold">Gasheizung</div>
                                <div className="text-sm text-neutral-500">Jetzt austauschen & sparen</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('roofType', 'electricite'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Thermometer />
                            <div>
                                <div className="font-bold">Elektroheizung / Nachtspeicher</div>
                                <div className="text-sm text-neutral-500">Sehr hohe Effizienzgewinne</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Welche Heizkörper nutzen Sie hauptsächlich?</h4>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'radiateurs'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap className="text-amber-500" />
                            <div>
                                <div className="font-bold">Klassische Heizkörper (Radiatoren)</div>
                                <div className="text-sm text-neutral-500">Niedertemperatur-Wärmepumpen geeignet</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'plancher'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Fußbodenheizung</div>
                                <div className="text-sm text-neutral-500">Hervorragende Effizienz</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 5 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Erhalten Sie Ihr kostenloses Angebot</h4>
                        <input type="text" name="name" placeholder="Vollständiger Name" value={formData.name} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-amber-500" />
                        <input type="text" name="zipCode" placeholder="Postleitzahl" value={formData.zipCode} onChange={handleInputChange} maxLength={5} className="w-full p-3 border rounded-xl outline-none focus:border-amber-500" />
                        <input type="email" name="email" placeholder="E-Mail-Adresse" value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-amber-500" />
                        <input type="tel" name="phone" placeholder="Telefonnummer" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-amber-500" />
                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                        
                        <button onClick={handleSubmit} disabled={status === 'loading'} className="w-full py-4 bg-amber-500 text-slate-900 rounded-xl font-bold text-lg hover:bg-amber-600 transition">
                            {status === 'loading' ? 'Wird gesendet...' : 'Kostenloses Angebot anfordern'}
                        </button>
                    </div>
                )}

                <div className="flex gap-3 mt-6">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-6 py-2 border rounded-xl hover:bg-neutral-50">
                            Zurück
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
