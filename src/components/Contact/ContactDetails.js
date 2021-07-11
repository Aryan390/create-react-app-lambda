import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import ContactData from './ContactData'
import classes from './ContactDetails.module.css'

const detailData = [
  {
    link: faPhone,
    data: "+919390754315",
    id: 1
  },
  {
    link: faEnvelope,
    data: 'aryantechie21@gmail.com',
    id: 2
  },
  {
    link: faMapMarkerAlt,
    data: 'Remote Work from India',
    id: 3
  }
]

const ContactDetails = () => {
  return (
    <div className={classes.dataContainer}>
      {detailData.map(item => 
        <ContactData
          key={item.id}
          link= {item.link}
          data={item.data}
        />
      )}
    </div>
  )
}

export default ContactDetails