import { createContext } from "react";

 
 const CartContext = createContext({
     items:0,
     totalAmount:0,
     addItem:()=>{},
     removeItem:()=>{},
 })

 



 export default CartContext