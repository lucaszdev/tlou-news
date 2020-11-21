import axios from 'axios';

const api = axios.create({
    baseURL: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search',
});

export default api;
