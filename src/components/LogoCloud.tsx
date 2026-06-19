import { Shield, CheckCircle } from "lucide-react";

const BRANDS = [
    { name: "Daikin", tier: "PAC" },
    { name: "Atlantic", tier: "PAC" },
    { name: "Mitsubishi", tier: "PAC" },
    { name: "Panasonic", tier: "PAC" },
    { name: "Toshiba", tier: "PAC" },
    { name: "Hitachi", tier: "PAC" }
];

export default function LogoCloud() {
    return (
        <section className="py-10 border-b border-slate-100 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                        Nos installateurs RGE posent les marques leaders :
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {BRANDS.map((brand) => (
                            <div key={brand.name} className="group flex items-center gap-2 cursor-default">
                                {brand.name === "Daikin" && <span className="font-bold text-xl tracking-tight text-slate-800">DAIKIN</span>}
                                {brand.name === "Atlantic" && <span className="font-bold text-xl tracking-tight text-blue-700">Atlantic</span>}
                                {brand.name === "Mitsubishi" && <span className="font-bold text-xl uppercase tracking-widest text-red-700">MITSUBISHI</span>}
                                {brand.name === "Panasonic" && <span className="font-bold text-xl tracking-tight text-slate-700">Panasonic</span>}
                                {brand.name === "Toshiba" && <span className="font-bold text-lg text-red-600">TOSHIBA</span>}
                                {brand.name === "Hitachi" && <span className="font-bold text-xl tracking-wide text-rose-800">Hitachi</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
