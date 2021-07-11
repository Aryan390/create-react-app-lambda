import { Fragment } from 'react'
import Particle from '../Particle/Particle'
import ParticleConfig from '../Particle/ParticleConfig'
import Card from '../UI/Card/Card'

import HomeInfo from './HomeInfo'
import HomeImg from './HomeImg'
import Caption from './Caption'
import classes from './Home.module.css'

const Home = () => {
  return (
    <Fragment>
      <div className={classes['header-bg']}>
        <Particle config={ParticleConfig} />
        <Caption />
      </div>
      <main className={classes['main-section']}>
        <div className={classes['main-container']}>
          <Card>
            <h1>Let Me Introduce Myself!</h1>
            <div className={classes.infoSection}>
              <HomeInfo />
              <HomeImg />
            </div>
          </Card>
        </div>
      </main>
    </Fragment>
  )
}

export default Home