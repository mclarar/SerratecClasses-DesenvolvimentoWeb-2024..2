import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {Input} from '../../components/Input/Input'
import { Botao } from "../../components/Botao/Botao";


export function ContatoPage() {
  const [mensagem, setMensagem] = useState("");

  const adicionarMensagem =()=>{
    setMensagem(e.target.value);
  }
  return (
    <div>
      {/* <Navbar /> */}

      <Input
        type={"text"}
        placeholder={"Digite sua mensagem"}
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

    {/* <button onClick={adicionarMensagem}>Adicionar Mensagem</button> */}
    <Botao onClick={adicionarMensagem}> Adicionar Mensagem</Botao>

    </div>
  );
}
