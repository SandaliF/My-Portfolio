import './About.css'
import CV from '../../assets/Sandali_Fernando_CV.pdf'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'

// import {experience} from '../../data/Data'

import HeadingText from '../../components/HeadingText/HeadingText'
import Card from '../../UI/Card'
import Tools from '../../components/Tools/Tools'
import Education from '../../components/Education/Education'

export default function About() {
  return (
    <>
    <section className='About'>
    <HeadingText title={'About'} titlePrimary={'Me'}/>

    <div className="container about-container">
      <div className="about-left">
        <h2 style={{ color: '#0b0236' }}>
          I'm Sandali Fernando
        </h2>
        <p>
        I am a young, dynamic, and highly adaptable third year undergraduate student of Department of Computer Science and Engineering of University of Moratuwa, seeking a challenging opportunity to utilize the best and enhance my skills. I possess excellent communication skills and I am comfortable working in a team-oriented environment. I am a quick learner and committed to achieving success in all my endeavors.
        </p>
        <a href={CV} download className ='btn'>
          Download CV <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span>
        </a>
      </div>

      {/* <div className='about-right'>
        {
          experience.map(({id, no, title})=>{
            return(
              <Card key={id} className={'experience-card'}>
                <h1><span style={{ color: '#0b0236' }}>{no}</span></h1>
                <p>{title}</p>
              </Card>
            )
          })
        }
      </div> */}
    </div>
    </section>
    <Tools/>
    <Education/>
    </>
  )
}
