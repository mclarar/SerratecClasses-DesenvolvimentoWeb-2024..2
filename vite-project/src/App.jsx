import "./App.css";
import { CartProvider } from "./context/carrinhoContext";
import { Rotas } from "./routes/Routes";

function App() {
  return (
    <>
      <CartProvider>
        <Rotas />
      </CartProvider>
    </>
  );
}

export default App;
