import axios from "axios"
import { environment } from "../environment/development"

const API = axios.create({
    baseURL: environment.url
});

export default API;
