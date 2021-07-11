import AboutContent from './AboutContent'
import AboutData from './AboutData'

import classes from './About.module.css'

const skillData = [
  {
    heading: 'Education',
    keyValue: [
      {title: 'Degree', value: ["Enrolled in a Bachelor's of Computer Science Program"]}
    ]
  },
  {
    heading: 'Skills',
    keyValue: [
      {title: 'FrontEnd', value: ['html', 'css','javascript','SASS', 'React', 'Redux', 'Next.js', 'Tailwind css']},
      {title: 'BackEnd', value: ['Node.js', 'Express']},
      {title: 'Databases', value: ['MySQL', 'MongoDB']},
      {title: 'Design', value: ['Figma']},
      {title: 'Other', value:['Data Structures', 'Core Java','C', 'Firebase', 'MERN Stack']}
    ]
  },
  {
    heading: 'Experiences',
    keyValue: [
      {title: '2020 -', value: ['Freelance Web Developer']}
    ]
  }
]

const About = () => {
  return (
    <div className={classes.container}>
      <AboutContent />
      <div className={classes.skills}>
        <div className={classes.skillDiv}>
          {
            skillData.map(item => 
              <AboutData
                heading = {item.heading}
                keyArr = {item.keyValue}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default About