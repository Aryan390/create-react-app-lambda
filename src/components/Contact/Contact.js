import Particle from '../Particle/Particle'
import ParticleConfig from '../Particle/ParticleConfig3'

import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

import classes from './Contact.module.css'

const Contact = () =>{
  return (
    <div className={classes.boss}>
      <h3>get in touch</h3>
      <h2>contact</h2>
      <Particle config={ParticleConfig} />
      <div className={classes.container}>
        <ContactDetails />
        <div className={classes.borderLine}></div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact