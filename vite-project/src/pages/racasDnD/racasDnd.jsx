import { useEffect, useState } from "react"
import {getAllRaces} from  '../../services/api'

export function ListaDeRacasDnd() {
 const [racas, setRacas] = useState([]);

 function obterRacas(){
    getAllRaces().then((res)=>{
        setRacas(res.data.results)
    }).catch((err)=>{
        console.log(err);
    });
 }

 useEffect(()=>{
    obterRacas();
 },[]);

  return (
    <>
    <h1>Lista de Raças do D&D!</h1>
         <ul>
            {racas.map(raca=>(
                <li key={raca.index}>{raca.name}</li>
            ))}
         </ul>
    </>
  )
}