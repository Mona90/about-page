import React from 'react'
import Slider from '../Slider'
import { ServiceSec } from './style'

function Services() {
    const Services = [
        {
            id:1,
            img:"/images/services/service1.png",
            title:"Commercial Areas",
            address1:"Downtown",
            address2:"Makadi Heights Mall",
        },{
            id:2,
            img:"/images/services/service2.png",
            title:"Sports Facilities",
            address1:"Sports Courts, Fitness Center",
            address2:"Water Sports Activities",
        },{
            id:3,
            img:"/images/services/service3.png",
            title:"Kids Friendly Areas",
            address1:"Kids Aqua Park",
            address2:"Kids Areas",
        },{
            id:4,
            img:"/images/services/service4.png",
            title:"Central Park",
            address1:"Far far away, behind",
            address2:"the word mountains",
        },{
            id:5,
            img:"/images/services/service5.png",
            title:"Hotels",
            address1:"Far far away, behind",
            address2:"the word mountains",
        },{
            id:6,
            img:"/images/services/service6.png",
            title:"Medical Facilities",
            address1:"Far far away, behind",
            address2:"the word mountains",
        },
    ]
  return (
    <ServiceSec>
        <div className='container'>
             <div className='row justify-content-between'>
                <div className='col-md-6 order-2 order-md-1'>
                    <h3 className='h2'>Discover Lifestyle</h3>
                    <h2 className='h1'>Amentities</h2>
                    <p className='text mb-4'>Occupying a land area of 33,000 square meters, Makadi Heights stunning clubhouse</p>
                    <ul className='row list-unstyled text-center services-info justify-content-between'>
                    {Services && Services.map(service=>(
                        <li className=' col-6' key={service.id}>
                            <div className='service-img'>
                                <img className='img-fluid' src={service.img} alt="icon"/>
                            </div>
                            <h5>{service.title}</h5>
                            <p className='mb-0'>{service.address1}</p>
                            <p>{service.address2}</p>
                        </li>
                    ))}
                    </ul>

                </div>
                <div className='col-md-5 order-1 order-md-2' style={{paddingTop:'40px'}}>
                    <Slider/>
                </div>
             </div>
        </div>
    </ServiceSec>
  )
}

export default Services