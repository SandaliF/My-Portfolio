import './Testimonials.css'

import HeadingText from '../HeadingText/HeadingText'
import Card from '../../UI/Card'

import { testimonials } from '../../data/Data'

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'

export default function Testimonials() {
  return (
    <section>
        <HeadingText titlePrimary={'Testimonials'}/>

        <div className='container testimonials-container'>

            <Swiper
            className='testimonials-wrapper'
            slidesPreView={1}
            spaceBetween={10}
            >
                {
                    testimonials.map(({id,img,name,des})=>{
                        return(
                            <SwiperSlide key={id}>
                                <Card className={'testimonial'}>
                                    <img src={img} alt=""/>
                                    <h5>{name}</h5>
                                    <p>{des}</p>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}
