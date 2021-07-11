import classes from './AboutData.module.css'

const AboutData = props => {
  return (
    <div className={classes['skill-list']}>
      <h1>{props.heading}</h1>
      <ul>
        {
          props.keyArr.map(item =>
            <li className={classes.skills}>
              <div className={classes.title}>{item.title}</div>
              <div className={classes.skillHolder}>
                {item.value.map(skill => <div className={classes.skill}>{skill}</div>)}
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default AboutData