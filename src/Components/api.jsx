// api.js
export const fetchTranslation = async (sourceLang, targetLang, text, timeout = 10000) => {
    const url = 'https://translate.googleapis.com/translate_a/single';
    const queryParams = new URLSearchParams({
        client: 'gtx',
        sl: sourceLang, // source language
        tl: targetLang, // target language
        dt: 't',        // data type (translation)
        q: text         // query text
    }).toString();

    const fullUrl = `${url}?${queryParams}`;

    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        console.warn('Request timeout triggered'); // Debugging log
        controller.abort();
    }, timeout);

    const options = {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36',
        },
        signal,
    };

    try {
        const response = await fetch(fullUrl, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch translation: ${errorText}`);
        }

        const result = await response.json();
        // Adjust parsing based on actual response structure
        const translatedText = result[0][0][0];
        return translatedText;

    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request timed out or aborted');
        } else {
            console.error('Fetch error:', error.message);
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
};

export default fetchTranslation;
