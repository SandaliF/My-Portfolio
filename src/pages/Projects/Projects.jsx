import './Projects.css'

import Card from '../../UI/Card'
import HeadingText from '../../components/HeadingText/HeadingText'
//import Testimonials from '../../components/Testimonials/Testimonials'

import { projects } from '../../data/Data'

export default function Projects() {
  return (
    <>
    <section className='projects'>
      <HeadingText title={'Recent'} titlePrimary={'Work'}/>

      <div className="container projects-container">
        {
        projects.map(({id,img,name,des})=>{
          return(
            <Card className={'project'} key={id}>
              <img src={img} alt="" />
              <h3>{name}</h3>
              <p>{des}</p>
              {/* <a href={github}>GitHub</a> */}
            </Card>
          )
        })
        }

      </div>
       
    </section>
    {/* <Testimonials/> */}
    </>
  )
}
