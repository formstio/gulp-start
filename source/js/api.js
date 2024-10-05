export const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const createOrder = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const result = await response.json();
    return result;
}