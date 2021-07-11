import FooterContent from './FooterContent'
import { FooterContact } from './FooterContent'
import SocialIcons from './SocialIcons'

import classes from './Footer.module.css'

const Footer = () => { 
  return(
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerInfo}>
          <div className={classes.footerContent}>
            <FooterContent />
          </div>
          <div className={classes.contact}>
            <FooterContact />
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className={classes.footerLine}>
        <div className={classes.footerContainer}>
          <div className={classes.footerEnd}>&copy; 2021 - Aryan | Desgined by me.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer