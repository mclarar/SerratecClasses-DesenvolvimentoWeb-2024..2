import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Input } from "./components/Input/Input";

// useState -> hook do react maneja estados de um componente 


function App() {
  const [nome, setNome] = useState('');
  // const [senha, setSenha] = useState('');

  return (
    <div className="container">
      <Navbar />
      <div className="containerInputs">
        <Input
          type={"text"}
          placeholder={"Digite seu nome"}
          value={nome}
          onChange={(e)=>{
            setNome(e.target.value), 
            console.log(e.target.value)
          }}
        />

        <h2>Bem vindo, {nome === "" ? "Visitante" : nome}!</h2>
        {/* <Input
          type={"password"}
          placeholder={"Digite sua senha"}
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
        /> */}


      </div>
    </div>
  );
}

export default App;
