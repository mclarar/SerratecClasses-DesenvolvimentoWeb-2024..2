import { useState } from 'react';
import styles from './Contador.module.css';

export function Contador(){
const [valorContador, setValorContador] = useState(0);

 function incrementar(){
    setValorContador(valorContador +1);
 }

 const decrementar =()=> setValorContador(valorContador - 1);
 

    return(
        <>
        <button className={styles.botao} onClick={incrementar}>incrementar</button>
        <button  className={styles.botao} onClick={decrementar}>decrementar</button>
        <p>{valorContador}</p>
        </>
    )


}