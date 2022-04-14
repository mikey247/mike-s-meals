import { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import HeaderComponent from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./context-store/card-context";
import CartContextProvider from "./context-store/CartProvider";

function App() {
  const [cart , setCart] = useState(false)

  const modalHandler = () => {
    setCart(true)
  }
  const closeModalHandler = ()=>{
    setCart(false)
  }
  return (
    <CartContextProvider>
    {cart &&  <Cart closeModalHandler={closeModalHandler}/>}
      <HeaderComponent modalHandler={modalHandler}/> 
      <main>
       <Meals/> 
      </main>
    </CartContextProvider>
  );
}

export default App;
