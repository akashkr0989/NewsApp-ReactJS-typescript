import axios from "axios";
import { environment } from "../environment/development";

export const POKEMON_API_CALL = axios.create({
  baseURL: environment.pokemonAPI,
});

export const COUNTRY_API = axios.create({
  baseURL: environment.countryAPI,
});

export const UNIVERSITIES_LIST_API_CALL = axios.create({
  baseURL: environment.universityList,
})

export const REGISTER = axios.create({
  baseURL: 'http://localhost:4000/api/v1/user/'
})

export const LOGIN = axios.create({
  baseURL: 'http://localhost:4000/api/v1/user/'
})

export const LOGOUT = axios.create({
  baseURL: 'http://localhost:4000/api/v1/user/'
})

