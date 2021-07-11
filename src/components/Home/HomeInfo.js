import { Link } from 'react-router-dom'

import classes from './HomeInfo.module.css'

const HomeInfo = () => {
  return (
    <div className={classes.information}>
      <h2>ABOUT ME</h2>
      <p>Well, i'm a young developer learning new things and freelancing. I have experience in using making full-fledged applications with javascript and working with various libraries and modules.</p>
      <div className={classes.btnSection}>
        <Link to='/contact'>
          <button className={`${classes.btn} ${classes.contactBtn}`}>Contact</button>
        </Link>
        <Link to='/about'>
        <button className={`${classes.btn} ${classes.aboutBtn}`}>Read More</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeInfo