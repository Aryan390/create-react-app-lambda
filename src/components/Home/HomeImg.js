import classes from './HomeImg.module.css'

import first from '../../assets/images/logan-weaver-Gi1rDqy9R40-unsplash.jpg'
import second from '../../assets/images/20210710_005211.jpg'


const HomeImg = () => {
  return (
    <div className={classes.imageSection}>
      <img src={first} alt="first" className={classes.first} />
      <img src={second} alt="second" className={classes.second} />
    </div>
  )
}

export default HomeImg