import ReactDOM from 'react-dom'

import classes from './Backdrop.module.css'

const BackdropOverlay = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const Backdrop = (props) => {
  return (
    ReactDOM.createPortal(<BackdropOverlay onClose={props.onClose} />, document.getElementById('backdrop'))
  )
}

export default Backdrop