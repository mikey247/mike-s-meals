import { useContext, useReducer } from "react"
import CartContext from "./card-context"

const defaultCartState = {
    items : [],
    totalAmount : 0
};

const cartReducer = (state, action) => {
    if (action.type==='ADD_ITEM'){
        const newTotalAmount =state.totalAmount + action.item.price * action.item.amount
        const existingCartItemsIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemsIndex]
        // let updatedItem;
        let updatedItems;
        
        if (existingCartItem){
            console.log(existingCartItem);
          const updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount +action.item.amount
            }
            console.log(updatedItem);
            updatedItems=[...state.items]
            updatedItems[existingCartItemsIndex] = updatedItem
        }else{
            updatedItems = state.items.concat(action.item)
        }
        return{
            items:updatedItems,
            totalAmount: newTotalAmount
        }
    }

    return defaultCartState
}

const CartContextProvider=(props)=>{
  const [cartState, dispatchCartState]  = useReducer(cartReducer, defaultCartState)

   const addItemToCart = (item)=>{
       dispatchCartState({type:'ADD_ITEM', item: item})
   }

   const removeItemFromToCart = (id)=>{
       dispatchCartState({type:'REMOVE_ITEM', id:id})
   }


    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCart,
        removeItem:removeItemFromToCart,

    }

    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
}

 export default CartContextProvider

















//  const defaultCartState = {
//     items: [],
//     totalAmmount:0,
// }

// const cartReducer = (state,action) =>{
//     if(action.type==='ADD_ITEM'){
//      const updatedItems = state.items.concat(action.item)
//      const updatedAmmount = state.totalAmmount + action.item.price * action.item.ammount
//      return{
//          items : updatedItems,
//          totalAmmount : updatedAmmount
//      }
//     }
//     return defaultCartState
// }

// const CartContextProvider=(props)=>{
//     const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
// //    const ctx = useContext(CartContext)

//    const addItemToCart = (item)=>{
//    dispatchCartState({type:'ADD_ITEM', item: item})
//    }

//    const removeItemFromToCart = (id)=>{
//     dispatchCartState({type:'REMOVE_ITEM', id: id})
// }


//     const cartContext = {
//         items:[cartState.items],
//         totalAmmount:cartState.totalAmmount,
//         addItem:addItemToCart,
//         removeItem:removeItemFromToCart,
//     }

//     return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
// }

//  export default CartContextProvider