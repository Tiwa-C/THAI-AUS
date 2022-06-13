import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://thai-aus.herokuapp.com/api/',
});