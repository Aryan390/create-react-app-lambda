import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './ContactData.module.css'

const ContactData = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={props.link} />
      </div>
      <div className={classes.data}>{props.data}</div>
    </div>
  )
}

export default ContactData