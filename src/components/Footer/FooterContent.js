import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classes from './FooterContent.module.css'


export const FooterContact = () => {
  return (
    <div className={classes.footerContact}>
      <h3>Have a Project in Mind</h3>
      <h2>Let me Help You</h2>
      <Link to='/contact'>
        <button className={classes.contactBtn}>Contact Now</button>
      </Link>
    </div>
  )
}

const FooterContent = () => {
  return (
    <Fragment>
      <h1>Aryan</h1>
      <p>A freelance web designer and developer from India. I always make websites that have unique designs and also has a good performance rate. I can make fullStack Applications with amazing user experience</p>
    </Fragment>
  )
}

export default FooterContent