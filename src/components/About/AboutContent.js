import classes from './AboutContent.module.css'
import myImg from '../../assets/images/nojan-namdar-a3RhaDG_pNM-unsplash.jpg'

const AboutContent = () => {
  return (
    <div className={classes.infoContainer}>
      <div className={classes.info}>
        <h2>Hi, I am <span> Aryan</span></h2>
        <h1>A Freelance Web Developer</h1>
        <p>Well, i'm a young developer learning new things and freelancing. I have experience in using making full-fledged applications with javascript and working with various libraries and modules.</p>
        <p>I was exposed to coding pretty late, during my college. Designing websites and applications through coding, gets me going and i enjoy the process a lot</p>
        <p>If you want to work with me on a project, go to the contact section, I am open to work on a contract basis OR as an intern as well!</p>
        <button className={classes.resumeBtn}>Resume</button>
      </div>
      <div className={classes.pic}>
        <img src={myImg} alt="aryan's pic" />
      </div>
    </div>
  )
}

export default AboutContent