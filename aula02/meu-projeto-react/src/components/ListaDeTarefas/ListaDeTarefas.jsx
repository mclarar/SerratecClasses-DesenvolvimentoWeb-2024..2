import { useState } from 'react'
import {Input} from '../Input/Input'
export function ListaDeTarefas(){
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);


    const adicionarTarefa =()=>{
        setTarefas([...tarefas, tarefa]);
        setTarefa('');
    }

    return(
        <>
        <Input 
            type={"text"}
            placeholder={"Digite sua tarefa"}
            value={tarefa} 
            onChange={ (e)=>setTarefa(e.target.value)}
        /> 
        
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>

        <ul>
            {tarefas.map((tarefa, index)=>
                <li key={index}>
                    {tarefa}
                </li>
            )}
        </ul>
        </>

    )
}