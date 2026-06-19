import Link from "next/link";
import { SITES } from "@/lib/sites-config";
import { CityConfig } from "@/lib/db";
import { SiteConfig } from "@/lib/sites-config";
import { getTheme } from "@/lib/theme";
import { Mail } from "lucide-react";

interface FooterProps {
    config: CityConfig | SiteConfig;
}

export function Footer({ config }: FooterProps) {
    if (!config) return null;

    const neighborhoods = (config as any).neighborhoods || (config as any).quartiers || [];
    const theme = getTheme(config.slug);

    // Group UNIQUE sites by region for the Mega Footer Directory
    const uniqueSites = Array.from(
        new Map(Object.values(SITES).map(site => [site.slug, site])).values()
    );

    const sitesByRegion = uniqueSites
        .filter(site => site.slug !== 'home' && site.slug !== 'expertwaermepumpe.de' && site.slug !== 'www.expertwaermepumpe.de')
        .reduce((acc, site) => {
            const region = site.region || 'Autres Régions';
            if (!acc[region]) acc[region] = [];
            acc[region].push(site);
            return acc;
        }, {} as Record<string, SiteConfig[]>);

    // Varied Anchor Logic (Local SEO)
    const getGlobalDiverseAnchor = (cityName: string, index: number) => {
        const variations = [
            `Solaranlage ${cityName}`,
            `Photovoltaik ${cityName}`,
            `Solar-Installateur ${cityName}`,
            `PV-Anlage kaufen ${cityName}`,
            `Offerte Solaranlage ${cityName}`,
            `${cityName} (Solarstrom)`
        ];
        return variations[index % variations.length];
    };

    return (
        <footer className="bg-neutral-900 border-t border-white/10 py-12 text-neutral-400">
            <div className="container mx-auto px-4 text-center">
                <h4 className="text-white font-bold mb-4">Über {config.name}</h4>
                <p className="max-w-2xl mx-auto text-sm mb-8">
                    {config.name} ist das führende Vergleichsportal für Photovoltaikanlagen in der Schweiz. Wir vermitteln Ihnen die besten Fachpartner in Ihrer Region.</p>

                <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-800 px-4 py-2 rounded-full mb-8">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="text-amber-400 font-bold text-sm">Réseau d&apos;Installateurs Certifiés RGE QualiPAC</span>
                </div>

                <div className="border-t border-white/10 pt-12 mt-12">
                    <div className="grid md:grid-cols-4 gap-8 text-left max-w-7xl mx-auto">
                        {/* Column 1: Zones / Quartiers */}
                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">
                                {config.slug === 'home' ? 'Unsere Regionen' : 'Zones d\'Intervention'}
                            </h5>
                            <ul className="space-y-3 text-sm">
                                {config.slug === 'home' ? (
                                    <>
                                        <li><Link href="/ville/paris" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Île-de-France</Link></li>
                                        <li><Link href="/ville/lyon" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Auvergne-Rhône-Alpes</Link></li>
                                        <li><Link href="/ville/marseille" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Provence-Alpes-Côte d&apos;Azur</Link></li>
                                        <li><Link href="/ville/bordeaux" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Nouvelle-Aquitaine</Link></li>
                                        <li><Link href="/ville/toulouse" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Occitanie</Link></li>
                                        <li><Link href="/ville/nantes" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Pays de la Loire</Link></li>
                                    </>
                                ) : (
                                    <>
                                        {neighborhoods.slice(0, 6).map((zone: string) => (
                                            <li key={zone}>
                                                <Link href={`#simulateur`} className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                                    <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                                    {zone}
                                                </Link>
                                            </li>
                                        ))}
                                        {neighborhoods.length === 0 && (
                                            <li className="text-neutral-500 italic">Ganz {config.city} und Umgebung</li>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Column 2: Smart Network */}
                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">
                                {(() => {
                                    if (config.slug === 'home') return 'Unser Netzwerk';

                                    const currentSite = config as SiteConfig;
                                    const strictNeighbors = uniqueSites.filter(s => {
                                        if (s.slug === 'home' || s.slug === currentSite.slug) return false;
                                        if (!s.department || !currentSite.department) return false;
                                        const sameDept = s.department === currentSite.department;
                                        const sameRegion = s.region && currentSite.region && s.region === currentSite.region;
                                        return sameDept || sameRegion;
                                    });

                                    return strictNeighbors.length > 0 ? 'In der Nähe' : 'Unser Netzwerk';
                                })()}
                            </h5>
                            <ul className="space-y-3 text-sm">
                                {(() => {
                                    let nearbySites = [];
                                    const currentSite = config as SiteConfig;

                                    if (config.slug === 'home') {
                                        const topSlugs = ['paris', 'marseille', 'lyon', 'bordeaux', 'nice'];
                                        nearbySites = uniqueSites.filter(s => topSlugs.includes(s.slug));
                                    } else {
                                        const sameDept = uniqueSites.filter(s => s.slug !== 'home' && s.slug !== currentSite.slug && s.department === currentSite.department);
                                        const sameRegion = uniqueSites.filter(s => s.slug !== 'home' && s.slug !== currentSite.slug && s.region === currentSite.region && s.department !== currentSite.department);

                                        const combined = [...sameDept, ...sameRegion, ...uniqueSites.filter(s => s.slug !== 'home' && s.slug !== currentSite.slug)];
                                        const seen = new Set();
                                        for (const s of combined) {
                                            if (!seen.has(s.slug) && nearbySites.length < 5) {
                                                seen.add(s.slug);
                                                nearbySites.push(s);
                                            }
                                        }
                                    }

                                    const getVariedFooterAnchor = (cityName: string, index: number) => {
                                        const variations = [
                                            `Solaranlage ${cityName}`,
                                            `Photovoltaik ${cityName}`,
                                            `Solar-Installateur ${cityName}`,
                                            `PV-Anlage kaufen ${cityName}`,
                                            `Offerte Solaranlage ${cityName}`
                                        ];
                                        return variations[index % variations.length];
                                    };

                                    return nearbySites.map((site, index) => (
                                        <li key={site.slug}>
                                            <Link
                                                href={`/ville/${site.slug}`}
                                                className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"
                                            >
                                                <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                                {getVariedFooterAnchor(site.city, index)}
                                            </Link>
                                        </li>
                                    ));
                                })()}
                            </ul>
                        </div>

                        {/* Column 3: Solutions */}
                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">Unsere Ratgeber</h5>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/guides/solar-foerderung-schweiz-2026" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Aides &amp; Subventions 2026
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides/rentabilitaet-photovoltaik-schweiz" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Rentabilität einer PV-Anlage
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides/solaranlage-kosten-schweiz" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Kosten einer Solaranlage
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Alle Ratgeber
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Partner werden
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Marques & Contact */}
                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">Top-Marken</h5>
                            <ul className="space-y-3 text-sm mb-8">
                                {[
                                    { name: "Daikin", slug: "daikin" },
                                    { name: "Mitsubishi", slug: "mitsubishi" },
                                    { name: "Atlantic", slug: "atlantic" },
                                    { name: "Viessmann", slug: "viessmann" }
                                ].map((brand) => (
                                    <li key={brand.slug}>
                                        <Link href={`#simulateur`} className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                            <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                            Solar {brand.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">Contact</h5>
                            <ul className="space-y-6">
                                <li>
                                    <Link href="/contact" className="flex items-start gap-4 text-neutral-400 hover:text-white transition group text-left">
                                        <div className={`p-2 rounded-lg bg-white/5 group-hover:${theme.classes.bg} transition group-hover:text-neutral-900`}>
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-white font-bold text-lg">Kontakt</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* MEGA FOOTER */}
                <div className="border-t border-white/10 pt-12 mt-4 text-left max-w-7xl mx-auto mb-16 px-4 md:px-0">
                    <h5 className="text-white font-bold mb-8 text-xl tracking-tight text-center md:text-left">
                        Unser Netzwerk National d&apos;Installateurs Pompes à Chaleur
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {Object.entries(sitesByRegion).map(([region, sites]) => (
                            <div key={region} className="space-y-4">
                                <h6 className="text-white/80 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-500/50"></span>
                                    {region}
                                </h6>
                                <ul className="space-y-3 text-sm">
                                    {sites.map((site, index) => (
                                        <li key={site.slug}>
                                            <Link
                                                href={`/ville/${site.slug}`}
                                                className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"
                                            >
                                                <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                                {getGlobalDiverseAnchor(site.city, index)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-xs border-t border-white/10 pt-8">
                    &copy; {new Date().getFullYear()} {config.name} - Alle Rechte vorbehalten.
                </div>
                <div className="flex justify-center gap-4 text-xs mt-4 mb-2">
                    <Link href={(config as any).basePath ? `${(config as any).basePath}/mentions-legales` : "/mentions-legales"} className="text-neutral-500 hover:text-white transition-colors">Impressum</Link>
                    <span className="text-neutral-700">•</span>
                    <Link href={(config as any).basePath ? `${(config as any).basePath}/cgv` : "/cgv"} className="text-neutral-500 hover:text-white transition-colors">AGB</Link>
                </div>
            </div>
        </footer>
    );
}
