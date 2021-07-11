import { Fragment, useState } from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import Modal from '../UI/Modal/Modal';

import classes from './ContactForm.module.css'

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false)
  const [requestFailed, setRequestFailed] = useState(false)
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')

  // basic checking of form, if the input fields are empty or not, only because the size of the application is very small. In other big large applications , u can use hooks mostly or a combination of useReducer() and useEffect()
  let formValidity
  if(enteredName!=='' && enteredEmail!=='' && enteredEmail.includes('@')) formValidity = true
  else formValidity = false

  const modalChangeHandler = () => {
    setShowModal(false)
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  let modalContent

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if(!formValidity){
      setShowModal(true)
      return;
    }

    try{
      const data = await fetch('https://portfolio-a5534-default-rtdb.firebaseio.com/profile.json',{
        method: 'POST',
        body: JSON.stringify({name:enteredName, email: enteredEmail})
      })
      if(!data.ok) throw new Error('the post request failed')

      setRequestFailed(false)
      setShowModal(true);
      setEnteredEmail('')
      setEnteredName('')

    }catch(err){
      setRequestFailed(true)
      setShowModal(true)
      setEnteredEmail('')
      setEnteredName('')
    }
  }

  let showErrorModal = (showModal)
  let showSuccessModal = (showModal && formValidity ) && !requestFailed

  if(showSuccessModal) {
    modalContent = (
      <Fragment>
        <h2>Your Response has been recorded!</h2>
        <h3>Thank You!</h3>
      </Fragment>
    )
  }

  if(showErrorModal && !formValidity){
    modalContent = <h2>The form is invalid, please try again</h2>
  }

  if(showErrorModal && requestFailed){
    modalContent = <h2>The post request to the server failed, please try again</h2>
  }

  let modalOverlay = (<Modal>{modalContent}</Modal>)
  let showBackdropAndModal = (showErrorModal || showSuccessModal)

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {showBackdropAndModal && <Backdrop onClose={modalChangeHandler}/>}
      {showBackdropAndModal && modalOverlay}
      <div className={classes.field}>
        <label htmlFor="name">Your Name</label>
        <input 
          type="text" 
          id="name" 
          className={classes.input} 
          placeholder="Name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="email">Your Email</label>
        <input 
          type="email" 
          id="email" 
          className={classes.input} 
          placeholder="Email"
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
      </div>
      <button 
        type="submit" 
        className={classes.submitBtn}
      >
        Subscribe!
      </button>
    </form>
  )
}

export default ContactForm