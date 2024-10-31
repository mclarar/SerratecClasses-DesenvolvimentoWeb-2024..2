import { useState } from "react";

export function AlternarVisibilidade() {
  const [visivel, setVisivel] = useState(false);

  //condicionais descritivas
    if (visivel === true) {
      ("Ocultar texto");
    } else {
      ("Mostrar texto");
    }

    if (visivel === true) {
      ("Esse é o texto oculto");
    } else {
      ("");
    }
  

  return (
    <>
      <button onClick={()=>setVisivel(!visivel)}>
        {/* forma ternário da condicional */}
        {visivel ? "Ocultar texto" : "Mostrar texto"}
      </button>

       {/* forma ternário da condicional sem o else*/}
      {visivel && <p>Este é o texto oculto</p>} 
    </>
  );
}
