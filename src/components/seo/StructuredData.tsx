import Script from "next/script";

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Solar Experte",
        "url": "https://www.solarexperte.ch",
        "logo": "https://www.solarexperte.ch/logo.png",
        "description": "Nationales Netzwerk von Fachpartnern für die Installation von Photovoltaikanlagen und Solarmodulen in der Schweiz.",
        "sameAs": [],
        "foundingDate": "2020",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CH"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "044 500 00 00",
            "contactType": "customer service",
            "areaServed": "CH",
            "availableLanguage": "German"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.solarexperte.ch/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.solarexperte.ch",
        "name": "solarexperte",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.solarexperte.ch/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Solarinstallation",
        "provider": { "@type": "Organization", "name": "solarexperte" },
        "areaServed": { "@type": "Country", "name": "Schweiz" }
    };

    return (
        <Script
            id="org-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) + '\n' + JSON.stringify(websiteSchema) + '\n' + JSON.stringify(serviceSchema) }}
        />
    );
}
