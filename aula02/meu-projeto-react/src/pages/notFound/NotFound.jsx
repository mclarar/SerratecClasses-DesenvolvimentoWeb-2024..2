import { useNavigate } from "react-router-dom";

export function NotFoundPage() {

   const navigate = useNavigate(); 

   const handleNavigation=()=> navigate("/contato");

  return (
    <>
      <h1>Error 404: Not Found</h1>

      <button onClick={handleNavigation}>Voltar a página Inicial</button>
      
    </>
  );
}


