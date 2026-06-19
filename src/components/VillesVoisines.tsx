import Link from 'next/link';
import { CITIES, CityConfig } from '@/lib/db';
import { slugify } from '@/lib/slugify';

interface VillesVoisinesProps {
    currentCitySlug: string;
    department: string;
    cityName: string;
}

export function VillesVoisines({ currentCitySlug, department, cityName }: VillesVoisinesProps) {
    if (!department) return null;

    const seen = new Set<string>();
    const neighbors: { slug: string; name: string }[] = [];

    for (const city of Object.values(CITIES)) {
        if (city.slug === 'home') continue;
        if (city.department !== department) continue;

        const cleanSlug = slugify(city.city);
        if (cleanSlug === currentCitySlug || city.slug === currentCitySlug) continue;
        if (seen.has(cleanSlug)) continue;
        seen.add(cleanSlug);

        neighbors.push({ slug: cleanSlug, name: city.city });
    }

    if (neighbors.length === 0) return null;
    neighbors.sort((a, b) => a.name.localeCompare(b.name));
    const displayNeighbors = neighbors.slice(0, 15);

    return (
        <section className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Solaranlagen Installation in der Nähe von {cityName}
                    </h2>
                    <p className="text-slate-600 mt-2">
                        Unsere Schweizer Fachpartner arbeiten auch in diesen Städten im Kanton {department}.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {displayNeighbors.map(city => (
                        <Link
                            key={city.slug}
                            href={`/ville/${city.slug}`}
                            className="text-sm text-slate-700 hover:text-amber-700 transition-colors block text-center bg-slate-50 py-3 px-2 rounded-lg border border-slate-100 hover:border-amber-200 hover:shadow-md font-medium"
                            title={`Photovoltaik in ${city.name}`}
                        >
                            {city.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}