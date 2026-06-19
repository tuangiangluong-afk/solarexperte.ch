"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
    slug: string;
    cityName: string;
}

const CookieBanner = ({ slug, cityName }: CookieBannerProps) => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };

    const rejectAll = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-neutral-900/95 backdrop-blur-md border border-amber-500/30 rounded-2xl p-6 shadow-2xl shadow-amber-500/10 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg shrink-0 bg-amber-500/10">
                    <Cookie className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Privatsphäre & Cookies
                    </h3>
                    <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                        Wir verwenden Cookies, um Ihre Erfahrung auf der Website von {cityName} zu verbessern. Kein aufdringliches Tracking, versprochen.
                        {' '}
                        <Link href="/mentions-legales" className="underline text-amber-400 hover:text-amber-300 transition">
                            Mehr erfahren
                        </Link>
                    </p>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={acceptAll}
                            className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors"
                        >
                            ${cityName ? "Alle akzeptieren" : "Alle akzeptieren"}
                        </button>
                        <button
                            onClick={rejectAll}
                            className="w-full py-2 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Ohne Einwilligung fortfahren
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
