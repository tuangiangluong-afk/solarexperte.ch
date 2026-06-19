"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

import { Theme } from "@/lib/theme";

interface ContactFormProps {
    domain: string;
    city: string;
    theme: Theme;
}

export default function ContactForm({ domain, city, theme }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const errors: string[] = [];
        if (!data.name || (data.name as string).trim() === "") errors.push("Vollständiger Name");
        if (!data.email || !(data.email as string).includes("@")) errors.push("E-Mail");
        if (!data.postalCode || !/^\d{4,5}$/.test((data.postalCode as string).trim())) errors.push("Postleitzahl");
        if (!data.message || (data.message as string).trim() === "") errors.push("Nachricht");
        
        const phone = (data.phone as string) || "";
        if (phone.trim() === "" || phone.length < 8) {
            errors.push("Telefonnummer");
        }

        if (errors.length > 0) {
            setStatus("error");
            setErrorMessage(`Bitte füllen Sie die Felder korrekt aus.`);
            return;
        }

        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, domain, city }),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an.");
            }

            setStatus("success");
            form.reset();
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error.message || "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an.");
        }
    }

    if (status === "success") {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Nachricht gesendet!</h3>
                <p className="text-green-700">
                    Vielen Dank für Ihre Kontaktaufnahme. Wir antworten innerhalb von 24 Stunden.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-green-800 hover:underline"
                >
                    Weitere Nachricht senden
                </button>
            </div>
        );
    }

    const inputClasses = `w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 transition outline-none bg-white font-medium`;
    const buttonClasses = `w-full flex items-center justify-center gap-2 rounded-xl py-4 text-white font-bold text-lg transition active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed ${theme.classes.bg} hover:brightness-110`;

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-700">Vollständiger Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Max Mustermann"
                        className={inputClasses}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-700">E-Mail</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@example.com"
                        className={inputClasses}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-neutral-700">Betreff</label>
                    <select
                        name="subject"
                        id="subject"
                        className={inputClasses}
                    >
                        <option value="devis_particulier">Offerte Privat</option>
                        <option value="devis_pro">Offerte Gewerbe</option>
                        <option value="partenariat_installateur">Installateur-Partner werden</option>
                        <option value="autre">Sonstige Anfrage</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="postalCode" className="text-sm font-medium text-neutral-700">Postleitzahl</label>
                    <input
                        required
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        maxLength={5}
                        className={inputClasses}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-neutral-700">Telefonnummer</label>
                <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    className={inputClasses}
                />
            </div>
            
            <input type="text" name="b_name" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700">Nachricht</label>
                <textarea
                    required
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Guten Tag, ich möchte..."
                    className={`${inputClasses} resize-none`}
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-700 text-sm">
                    <AlertCircle size={16} />
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className={buttonClasses}
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Wird gesendet...
                    </>
                ) : (
                    <>
                        <Send size={20} />
                        Nachricht senden
                    </>
                )}
            </button>

            <p className="text-xs text-center text-neutral-500">
                Mit dem Absenden akzeptieren Sie unsere Datenschutzrichtlinie.
            </p>
        </form>
    );
}