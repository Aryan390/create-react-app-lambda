import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import classes from './SocialIcons.module.css'

const SocialIcons = () => {
  return (
    <ul className={classes.socialIcons}>
      <li className={classes.icon}>
        <a href="https://github.com/Aryan390" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </li>
      <li className={classes.icon}>
        <a href="https://www.linkedin.com/in/aryan-y-9aa369191/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </li>
      <li className={classes.icon}>
        <a href="https://www.instagram.com/aryan.codes/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons