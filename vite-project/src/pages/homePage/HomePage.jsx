import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/Button/Button";

export function HomePage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/contador");
  }

  return (
    <>
      <Botao onclick={handleNavigate} valor={"clique aqui"} />
      <br />
      <br />
      <Botao
        onclick={() => navigate("/lista-de-pokemon")}
        valor={"clique aqui para ver a lista"}
      />
    </>
  );
}
