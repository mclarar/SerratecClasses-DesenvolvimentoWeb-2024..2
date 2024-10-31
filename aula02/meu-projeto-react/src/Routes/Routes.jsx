import { Routes, Route } from 'react-router-dom';
import { ContatoPage } from '../pages/contato/ContatoPage';


export function Rotas(){
    return(
     <Routes>
            <Route path='/contato' element={<ContatoPage/>}/>
     </Routes>
    )
}