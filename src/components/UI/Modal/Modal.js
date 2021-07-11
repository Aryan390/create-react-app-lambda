import ReactDom from "react-dom"

import classes from './Modal.module.css'

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  )
}

const Modal = (props) => {
  return (
    ReactDom.createPortal(
      <ModalOverlay>
        {props.children}
      </ModalOverlay>, 
      document.getElementById('modal') 
    )
  )
}

export default Modal