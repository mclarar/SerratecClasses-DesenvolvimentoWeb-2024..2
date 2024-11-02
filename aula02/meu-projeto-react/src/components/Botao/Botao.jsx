import { BotaoEstilizado } from "./style";

export function Botao({ onclick, children }) {
  return <BotaoEstilizado onclick={onclick}> {children}</BotaoEstilizado>;
}
