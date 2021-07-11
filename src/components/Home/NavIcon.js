import ReactDOM from 'react-dom'
import { Fragment } from 'react'

import classes from './NavIcon.module.css'
import logo from '../../assets/images/cocosign.png'

const Icon = (props) => {
  return (
    <Fragment>
      <button className={classes['nav-bar']} onClick={props.onClick}>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </button>
      <img src={logo} alt="aryan logo" className={classes.logo} />
    </Fragment>
  )
}

const portalElement = document.getElementById('navBtn')

const NavIcon = (props) => {
  return(
    ReactDOM.createPortal(<Icon onClick={props.onShow} />, portalElement)
  )
}

export default NavIcon;