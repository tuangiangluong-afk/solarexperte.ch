import { NextRequest, NextResponse } from "next/server";
import { isMainHub } from "@/lib/sites-config";

export const config = {
    matcher: [
        "/((?!api/|_next/|_static/|_vercel|images/|[\\w-]+\\.\\w+).*)",
        "/sitemap.xml",
        "/robots.txt"
    ],
};

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl;

    // Get hostname (e.g. bornerechargeparis.fr, solarexperte.ch)
    let hostname = req.headers.get("host") || "solarexperte.ch";
    hostname = hostname.split(":")[0]; // Remove port if present

    // Check if we are on the main hub
    const isHub = isMainHub(hostname);

    // Get the path
    const searchParams = req.nextUrl.searchParams.toString();
    const cleanPath = url.pathname;
    const path = `${cleanPath}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

    // Helper to apply security headers
    const applySecurityHeaders = (res: NextResponse) => {
        res.headers.set("X-Frame-Options", "DENY");
        res.headers.set("X-Content-Type-Options", "nosniff");
        res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
        res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
        res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
        return res;
    };

    // 0.1 Path Normalization (Lowercase & No Trailing Slash handled by next.config `trailingSlash: false`)
    if (cleanPath !== cleanPath.toLowerCase()) {
        const lowercaseUrl = new URL(url.origin + url.pathname.toLowerCase() + url.search);
        if (lowercaseUrl.href !== url.href) {
            return applySecurityHeaders(NextResponse.redirect(lowercaseUrl, 301));
        }
    }

    // 0.2 Domain Normalization (www -> non-www)
    // Consolidate domain key early for all logic
    let domainKey = hostname;
    if (hostname.includes(".localhost")) {
        domainKey = hostname.split(".")[0];
        if (domainKey === "www") domainKey = hostname.split(".")[1];
    } else if (hostname.startsWith("www.")) {
        domainKey = hostname.replace("www.", "");
    }

    // 1. Sitemap Rewrite
    if (path === "/sitemap.xml") {
        let sitemapResponse;
        if (isHub) {
            sitemapResponse = NextResponse.rewrite(new URL("/home/sitemap.xml", req.url));
        } else {
            sitemapResponse = NextResponse.rewrite(new URL(`/${domainKey}/sitemap.xml`, req.url));
        }
        sitemapResponse.headers.set("x-irve-domain", domainKey);
        sitemapResponse.headers.set("x-irve-city", domainKey);
        return applySecurityHeaders(sitemapResponse);
    }

    // 1.5 Robots Rewrite
    if (path === "/robots.txt") {
        if (isHub) {
            return applySecurityHeaders(NextResponse.next());
        }
        const robotsResponse = NextResponse.rewrite(new URL(`/api/robots`, req.url));
        robotsResponse.headers.set("x-irve-domain", domainKey);
        return applySecurityHeaders(robotsResponse);
    }

    // 2. Routing Logic
    let response: NextResponse;

    if (isHub) {
        if (cleanPath.startsWith("/home") && cleanPath !== "/home/sitemap.xml") {
            const cleanUrl = cleanPath.replace("/home", "") || "/";
            const targetUrl = new URL(cleanUrl + url.search, req.url);
            if (targetUrl.href !== req.url) {
                return applySecurityHeaders(NextResponse.redirect(targetUrl, 301));
            }
        }

        if (path.startsWith("/admin") || path.startsWith("/login") || path.startsWith("/api") || path.startsWith("/leads") || path.startsWith("/guides") || path.startsWith("/outils") || path.startsWith("/vehicules") || path.startsWith("/ville") || path.startsWith("/solutions") || path.startsWith("/service") || path.startsWith("/quartier") || path.startsWith("/departement") || path.startsWith("/poi") || path.startsWith("/demo") || path.startsWith("/installation") || path.startsWith("/images")) {
            response = NextResponse.next();
        } else {
            response = NextResponse.rewrite(
                new URL(`/home${path === "/" ? "" : path}`, req.url)
            );
        }
    } else {
        if (path.startsWith("/guides") || path.startsWith("/leads") || path.startsWith("/vehicules") || path.startsWith("/solutions") || path.startsWith("/ville") || path.startsWith("/service") || path.startsWith("/quartier") || path.startsWith("/departement") || path.startsWith("/poi") || path.startsWith("/api") || path.startsWith("/outils") || path.startsWith("/login") || path.startsWith("/admin") || path.startsWith("/installation")) {
            response = NextResponse.next();
        } else {
            const routeParam = hostname.includes(".localhost") ? domainKey : domainKey;
            response = NextResponse.rewrite(
                new URL(`/${routeParam}${path}`, req.url)
            );
        }
    }

    // Global Headers for SEO & Canonical
    response.headers.set("x-irve-domain", domainKey);
    response.headers.set("x-irve-city", domainKey);
    response.headers.set("x-irve-path", cleanPath);

    // Shared routes must point back to the main hub as their canonical source
    if (cleanPath.startsWith("/guides") || cleanPath.startsWith("/solutions") || cleanPath.startsWith("/service") || cleanPath.startsWith("/poi") || cleanPath.startsWith("/outils") || cleanPath.startsWith("/installation")) {
        response.headers.set("x-irve-canonical-domain", "www.solarexperte.ch");
    } else {
        response.headers.set("x-irve-canonical-domain", "www." + domainKey);
    }

    // Vercel CDN Caching
    if (
        !cleanPath.startsWith("/api") && 
        !cleanPath.startsWith("/admin") && 
        !cleanPath.startsWith("/login") && 
        !cleanPath.startsWith("/leads") &&
        !cleanPath.startsWith("/success") &&
        !cleanPath.startsWith("/demo")
    ) {
        response.headers.set("Vercel-CDN-Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
    }

    return applySecurityHeaders(response);
}
