import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length > 10;

const Checkout = (props) => {
  const [nameInputValidity, setNameInputValidity] = useState(true);
  const [addressInputValidity, setAddressInputValidity] = useState(true);
  const nameRef = useRef();
  const addressRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAddress = addressRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const addressIsValid = isTenChars(enteredAddress);
    setNameInputValidity(nameIsValid);
    setAddressInputValidity(addressIsValid);

    const formIsValid = nameIsValid && addressIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          nameInputValidity ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!nameInputValidity && <p>invalid Name</p>}
      </div>

      <div
        className={`${classes.control} ${
          addressInputValidity ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Address</label>
        <input type="text" id="name" ref={addressRef} />
        {!addressInputValidity && <p>Invalid Address</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
