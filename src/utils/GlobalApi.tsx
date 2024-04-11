const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

const getMains = () => axiosClient.get('/mains?populate=*');
const getAbouts = () => axiosClient.get('/about?populate=*');
const getTours = () => axiosClient.get('/tours?pagination[pageSize]=6&sort[]=id:desc&populate=*');
const getCountries = () => axiosClient.get('/countries?populate=*');
const getFooters = () => axiosClient.get('/footer?populate=*');

export default {
    getMains,
    getAbouts,
    getTours,
    getCountries,
    getFooters
}