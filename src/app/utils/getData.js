export const getData = async (url, method = "GET") => {
    try {
        const res = await fetch(url, {
            method: method,
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch footer data');
        }
        return await res.json();

    } catch (error) {
        console.error('Error fetching footer data:', error);

        return null;
    }
}