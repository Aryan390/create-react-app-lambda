import { Link } from 'react-router-dom'

import classes from './Navigation.module.css'

const Navigation = (props) => {
  return (
    <ul className={classes.list}>
      <li><Link to='/home' onClick={props.onClose}>Home</Link></li>
      <li><Link to='/about' onClick={props.onClose}>About</Link></li>
      <li><Link to='/contact' onClick={props.onClose}>Contact</Link></li>
    </ul>
  )
}

export default Navigation