import Particles from 'react-particles-js';

import classes from './Particle.module.css'

const Particle = (props) =>{
  return <Particles params={props.config} className={classes.particle} />
}

export default Particle