"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { Zap } from "lucide-react";
import { usePathname } from "next/navigation";

interface HeaderProps {
    isHub?: boolean;
    city?: string | null;
    phoneNumber?: string;
    variant?: "default" | "light" | "transparent";
    themeColor?: string;
}

export default function Header({
    isHub = false,
    city = null,
    phoneNumber = "044 500 00 00",
    variant = "default",
    themeColor = 'amber'
}: HeaderProps) {
    const pathname = usePathname();

    const demoMatch = pathname?.match(/^(\/demo\/[^\/]+)/);
    const customLink = demoMatch ? demoMatch[1] : undefined;

    const bgClass = variant === "transparent"
        ? "bg-transparent border-transparent"
        : variant === "light"
            ? "bg-neutral-900/95 backdrop-blur border-white/10 text-white"
            : "bg-white/95 backdrop-blur border-slate-200 text-slate-900";

    const homePath = customLink || "/";
    const isHome = pathname === homePath;
    const simulatorHref = isHome ? "#simulateur" : `${homePath}#simulateur`;

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${bgClass} py-3`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Logo
                    isHub={isHub}
                    city={city}
                    size="md"
                    variant={variant === "light" ? "light" : "default"}
                    themeColor={themeColor}
                    customLink={customLink}
                />

                <div className="flex items-center gap-4">
                    {isHub && (
                        <div className={`hidden md:flex items-center gap-6 text-sm font-medium ${variant === "light" ? "text-slate-300" : "text-slate-600"}`}>
                            <Link href="/guides" className="hover:text-amber-500 transition">Ratgeber</Link>
                            <Link href="#simulateur" className="hover:text-amber-500 transition">Simulator</Link>
                        </div>
                    )}

                    <div className="hidden lg:flex items-center gap-2 bg-amber-500/10 border-amber-500/20 text-amber-700 px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="text-xs font-bold">Zertifizierte Solarpartner</span>
                    </div>

                    <Link
                        href={simulatorHref}
                        className={`hidden md:flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-lg transition transform hover:-translate-y-0.5 bg-amber-600 hover:bg-amber-700 shadow-amber-500/20`}
                    >
                        <Zap size={16} fill="currentColor" />
                        <span>Gratis Offerte</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
