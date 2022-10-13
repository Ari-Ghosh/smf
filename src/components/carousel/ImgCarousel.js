import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Drone from '../../assets/drone.webp'
import Robotics from '../../assets/robotics.jpeg'
import Ai from '../../assets/ai.jpeg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={false} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={Drone} alt='/' />
                </div>
                <div>
                    <img src={Robotics} alt='/' />
                </div>
                <div>
                    <img src={Ai} alt='/' />
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel