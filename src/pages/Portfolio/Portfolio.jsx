import './Portfolio.css'

import Card from '../../UI/Card'
import HeadingText from '../../components/HeadingText/HeadingText'
import Testimonials from '../../components/Testimonials/Testimonials'

import { portfolio } from '../../data/Data'

export default function Portfolio() {
  return (
    <>
    <section className=''portfolio>
      <HeadingText title={'Recent'} titlePrimary={'Work'}/>

      <div className="container portfolio-container">
        {
        portfolio.map(({id,img,name,des,github})=>{
          return(
            <Card className={'project'} key={id}>
              <img src={img} alt="" />
              <h3>{name}</h3>
              <p>{des}</p>
              <a href={github}>GitHub</a>
            </Card>
          )
        })
        }

      </div>
       
    </section>
    <Testimonials/>
    </>
  )
}
