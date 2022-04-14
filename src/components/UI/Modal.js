import classes from './Modal.module.css'
import React from "react";
import ReactDOM from 'react-dom'

const Backdrop = props=>{
 return <div className={classes.backdrop} onClick={props.onClick}/>
}

const ModalOverlay = (props) =>{
 return <div className={classes.modal}>
   <div className={classes.content}>{props.children}</div>
 </div>
}

const Modal = (props) => {
    return (
        <>
         {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('modal-root') )}

        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modal-root') )}
        </>
      );
}
 
export default Modal;