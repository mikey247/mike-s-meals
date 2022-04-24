import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../context-store/card-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `₦${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    console.log(item);
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          //we use the arrow function or cartItemAddHandler.bind(null,item) to pass this function because the CartItem component does not have accesss to the item used in the parameter(item)
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setCheckout(true);
  };
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://movies-project-13f43-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && hasItems && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.closeModalHandler}
        />
      )}
      {!checkout && (
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.closeModalHandler}
          >
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );
  const isSubmittingModalContent = (
    <>
      <p>Sending order data.....</p>
    </>
  );
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!! </p>
      <button className={classes.button} onClick={props.closeModalHandler}>
        Close
      </button>
    </>
  );
  return (
    <>
      <Modal onClick={props.closeModalHandler}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
      </Modal>
    </>
  );
};

export default Cart;
