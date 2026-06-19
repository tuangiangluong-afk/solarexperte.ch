import Script from "next/script";

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Wärmepumpe Experte",
        "url": "https://www.expertwaermepumpe.de",
        "logo": "https://www.expertwaermepumpe.de/logo.png",
        "description": "Réseau national d'installateurs de pompes à chaleur pour particuliers et professionnels. Installateurs certifiés RGE QualiPAC.",
        "sameAs": [
            "https://www.facebook.com/expertwaermepumpe",
            "https://www.instagram.com/expertwaermepumpe"
        ],
        "foundingDate": "2020",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33 1 84 80 00 00",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": "French"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.expertwaermepumpe.de/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.expertwaermepumpe.de",
        "name": "expertwaermepumpe",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.expertwaermepumpe.de/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Installation et Dépannage",
        "provider": { "@type": "Organization", "name": "expertwaermepumpe" },
        "areaServed": { "@type": "Country", "name": "France" }
    };

    return (
        <Script
            id="org-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) + '\n' + JSON.stringify(websiteSchema) + '\n' + JSON.stringify(serviceSchema) }}
        />
    );
}
