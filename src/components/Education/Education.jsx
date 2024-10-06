import './Education.css'

import Card from '../../UI/Card'
import HeadingText from '../HeadingText/HeadingText'

import { education } from '../../data/Data'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Services() {
  return (
    <section className='education'>
        <HeadingText titlePrimary={'Education'}/>

        <div className="education-container">
        {
            education.map(({id,name,des})=>{
                return(
                    <Card key={id} className='education-card'> 
                        {/* <span><FontAwesomeIcon icon={icon}/></span> */}
                        <h3>{name}</h3>
                        <p>{des}</p>
                    </Card>
                )
            })
        }
        </div>
    </section>
  )
}
