import axios from "axios";

export const api = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/'
});

export const getAllRaces=()=>{
    const url = '/races'
    return api.get(url);
}


