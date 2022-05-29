import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Slider() {
    const slideData = [
        {
            id:1,
            imgSrc:"/images/slider/slide1.png"
        },
        {
            id:2,
            imgSrc:"/images/slider/slide1.png"
        },{
            id:3,
            imgSrc:"/images/slider/slide1.png"
        },
        {
            id:4,
            imgSrc:"/images/slider/slide1.png"
        }
    ]

  return (
        <Carousel showThumbs={false}>
            {slideData && slideData.map((slide)=>(
                <div className="carousel-item active" key={slide.id}>
                    <img src={slide.imgSrc} className="d-block w-100" alt="..."/>
                </div>
            ))}
            
        </Carousel>
  )
}

export default Slider