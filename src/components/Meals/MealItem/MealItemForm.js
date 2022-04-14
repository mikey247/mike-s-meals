import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsvalid] = useState(true)
    const amountInputRef = useRef();
    
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmmount = amountInputRef.current.value;
        const enteredAmmountNumber = +enteredAmmount

        if(enteredAmmount.trim().length ===0 || enteredAmmountNumber < 1 || enteredAmmountNumber > 5 ){
            setAmountIsvalid(false)
            return
        }
        props.onAddToCart(enteredAmmountNumber)
    }

    return ( 
        <form className={classes.form} onSubmit={submitHandler}>
         <Input ref={amountInputRef} label='Amount' input={{
             id:props.id,
             type:'number' ,
             min:'1',
             step:'1',
             defaultValue:'1'
        }}/>
         <button>+Add</button>
          {!amountIsValid && <p> Enter a valid ammount from (1-5)</p>}
        </form>
     );
}
 
export default MealItemForm;