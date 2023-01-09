import fetch from 'node-fetch';

export default async function fetchPaginated(url, options) {
    const response = await fetch(url, options);
    return response.json;
}