'use client';

import { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { findLocalSite } from '@/app/actions/find-local-site';
import Link from 'next/link';
import { NATIONAL_TARGETS } from '@/config/national-targets';

const SUGGESTIONS = NATIONAL_TARGETS.map(t => ({
    name: `${t.name} (${t.zip.substring(0, 2)})`,
    slug: t.slug
}));

export default function LocalLinker() {
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'not-found'>('idle');
    const [result, setResult] = useState<{ url: string; city: string } | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Filter suggestions
    const filteredSuggestions = useMemo(() => {
        if (!query || query.length < 2) return [];
        const lower = query.toLowerCase();
        return SUGGESTIONS.filter(s => s.name.toLowerCase().includes(lower));
    }, [query]);

    const handleSelect = (slug: string, name: string) => {
        setQuery(name);
        setShowSuggestions(false);
        setStatus('loading');
        const target = NATIONAL_TARGETS.find(t => t.slug === slug);
        if (target) {
            setResult({ url: `/ville/${target.slug}`, city: target.name });
            setStatus('success');
        } else {
            setStatus('not-found');
        }
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setShowSuggestions(false);
        setStatus('loading');
        try {
            const match = await findLocalSite(query);
            if (match.found && match.slug && match.city) {
                setResult({ url: `/ville/${match.slug}`, city: match.city });
                setStatus('success');
            } else {
                setStatus('not-found');
            }
        } catch (err) {
            console.error(err);
            setStatus('not-found');
        }
    };

    return (
        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl ring-1 ring-white/10 relative z-50">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-slate-950" size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-lg">Installateur Chauffage / PAC Local</h3>
                    <p className="text-amber-200 text-xs">Finden Sie Ihren lokalen Experten</p>
                </div>
            </div>

            <form onSubmit={handleSearch} className="mb-4 relative">
                <div className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setShowSuggestions(true);
                            if (status !== 'idle') setStatus('idle');
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
                        placeholder="Ville (ex: Paris, Lyon...)"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 pl-10 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition placeholder:text-slate-500 text-white"
                        autoComplete="off"
                    />
                    <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

                    <button
                        type="submit"
                        disabled={status === 'loading' || !query}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-amber-500 rounded-lg hover:bg-amber-400 disabled:opacity-50 transition text-slate-950"
                    >
                        {status === 'loading' ? (
                            <Loader2 size={16} className="animate-spin text-slate-950" />
                        ) : (
                            <ArrowRight size={16} />
                        )}
                    </button>
                </div>

                {/* Autocomplete Dropdown */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                        <ul className="py-1">
                            {filteredSuggestions.map((s) => (
                                <li key={s.slug}>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(s.slug, s.name)}
                                        className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition flex items-center justify-between group"
                                    >
                                        <span className="font-medium text-slate-800">{s.name}</span>
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>

            {status === 'success' && result && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={18} />
                        <div>
                            <p className="text-sm font-medium text-green-100 mb-2">
                                Gute Nachrichten! Wir haben einen zertifizierten Solarpartner in <span className="text-white font-bold">{result.city}</span>.
                            </p>
                            <Link
                                href={result.url}
                                className="inline-flex items-center gap-2 text-xs font-bold bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-400 transition shadow-lg shadow-green-900/20 w-full justify-center"
                            >
                                Simuler mes gains locaux <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {status === 'not-found' && (
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="text-slate-400 shrink-0 mt-0.5" size={18} />
                        <div>
                            <p className="text-xs text-slate-300 mb-2">
                                Pas de site dédié pour cette zone, mais notre réseau national d&apos;installateurs QualiPAC couvre toute la France.
                            </p>
                            <Link
                                href="/#simulateur"
                                className="text-xs font-bold text-amber-400 hover:text-amber-300 underline decoration-amber-400/30"
                            >
                                Faire une demande nationale
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
