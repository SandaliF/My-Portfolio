import './Home.css'
import HeaderImage from '../../assets/me.jpg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <header>
      <div className="container container-lg header-container">
          <img src={HeaderImage} alt="" />

          <div className="header-right">
            <h1>
              <span style={{ color: '#a2012d' }}>Hi, I'm Sandali Fernando </span> <br/>
              Full Stack Developer
            </h1>
            <p>
                I  am a young, dynamic, and highly adaptable third year undergraduate student, seeking a challenging opportunity to utilize the best and enhance my skills. I possess excellent communication skills and I am comfortable working in a team-oriented environment. I am a quick learner and committed to achieving success in all my endeavors.
            </p>
            <Link className='btn' to={'/about'}> About Me
                <span><FontAwesomeIcon icon={faArrowRight} /></span> 
            </Link>
          </div>
      </div>
    
      
    </header>
  )
}
