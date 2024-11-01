import axios from "axios";

// export const api = axios.create({
//     baseURL: 'https://pokeapi.co/api/v2/',
// })

// caso esteja consumindo uma api localmente
export const api = axios.create({
    baseURL: 'http://localhost:8080',
})

