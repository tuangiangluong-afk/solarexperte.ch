export async function sendLeadToHabitissimo(payload: any) {
    const HABITISSIMO_API_KEY = process.env.HABITISSIMO_API_KEY;
    if (!HABITISSIMO_API_KEY) {
        console.warn("⚠️ Habitissimo API key is missing. Simulating success.");
        return { success: true, simulated: true };
    }

    console.log("📡 [Habitissimo] Envoi du lead en cours...");

    try {
        const response = await fetch('https://api.habitissimo.com/v1/leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HABITISSIMO_API_KEY}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Habitissimo API error: ${response.status} - ${errorData}`);
        }

        return await response.json();
    } catch (error) {
        console.error("❌ [Habitissimo] Error:", error);
        throw error;
    }
}
