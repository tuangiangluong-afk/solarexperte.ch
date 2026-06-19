import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GoogleAnalytics GA_MEASUREMENT_ID="G-20JN53SLCP" />
            {children}
            <CookieBanner slug="home" cityName="Wärmepumpe Experte" />
        </>
    );
}
