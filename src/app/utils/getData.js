export const getData = async (url, method = "GET", revalidateTime = 3600 ) => {
    try {
        const res = await fetch(url, {
            method: method,
            next: { revalidate: revalidateTime },
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