export async function sendLeadToDAA(payload: any) {
    const DAA_API_KEY = process.env.DAA_API_KEY;
    if (!DAA_API_KEY) {
        console.warn("⚠️ DAA API key is missing. Simulating success.");
        return { success: true, simulated: true };
    }

    console.log("📡 [DAA] Envoi du lead en cours...");

    try {
        const response = await fetch('https://api.daa.net/v1/leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DAA_API_KEY}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`DAA API error: ${response.status} - ${errorData}`);
        }

        return await response.json();
    } catch (error) {
        console.error("❌ [DAA] Error:", error);
        throw error;
    }
}
