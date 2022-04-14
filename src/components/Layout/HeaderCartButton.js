import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../context-store/card-context";
import { useContext } from "react";


const HeaderCartButton = (props) => {
    const cardCtx = useContext(CartContext)
    // const arr = [ {amount:2},{amount:5},{amount:3},{amount:1},]
    const numberOfCartItems = cardCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)
    // console.log(numberOfCartItems);
    return ( 
        <>
        <button className={classes.button} onClick={props.onClick}>
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