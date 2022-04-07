import axios from "axios";

const defaultOptions = {
    baseURL: "http://instagram-backent.herokuapp.com",
    headers: {
        'Content-Type': 'application/json',
    },
};

let API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
    const token = localStorage.getItem('user-token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default API;