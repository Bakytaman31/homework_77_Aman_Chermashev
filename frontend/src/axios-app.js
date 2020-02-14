import axios from 'axios';
import {apiURL} from "./constants";


export const axiosApp = axios.create({
    baseURL: apiURL
});