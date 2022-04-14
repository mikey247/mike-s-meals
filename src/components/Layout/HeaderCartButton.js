import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../context-store/card-context";
import { useContext,useEffect,useState } from "react";


const HeaderCartButton = (props) => {
    const [btnIsTouched, setBtnIsTouched] = useState(false)
    const cardCtx = useContext(CartContext)
    const {items} = cardCtx
    // const arr = [ {amount:2},{amount:5},{amount:3},{amount:1},]
    const numberOfCartItems = items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)

    const btnClass= `${classes.button} ${btnIsTouched ? classes.bump: ''}`;

    useEffect(()=>{
        if(items.length ===0){
         return
        }
   setBtnIsTouched(true)

   const timer= setTimeout(()=>{
      setBtnIsTouched(false)
   }, 300)
   return () => {
  clearTimeout(timer)
   }
    }, [items])

    // console.log(numberOfCartItems);
    return ( 
        <>
        <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>  
        
        <span>Your Cart</span>
        
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        </>
     );
}
 
export default HeaderCartButton;