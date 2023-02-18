import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/stock-eyelash.jpeg'
import image4 from '../assets/stock-eyelash-2.webp'
import image5 from '../assets/stock-eyelash-3.jpeg'

export default function Slides () {


    return (
        <div className='slider-container'>
                            <h1 className='wte-title'>Gallery</h1>
        <Carousel className='carousel-style'>
                <div className='slider-item'>
                    <img className='gallery-image' src={image1} alt='gallery5' />
                    <p className="legend">Mia - Volume</p>
                </div>
                <div className='slider-item'>
                    <img className='gallery-image'  src={image2} alt='gallery4' />
                    <p className="legend">Allison - Volume</p>
                </div>
                <div className='slider-item'>
                    <img  className='gallery-image' src={image3} alt='gallery3' />
                    <p className="legend">Person1 - Classic</p>
                </div>
                <div className='slider-item'>
                    <img className='gallery-image'  src={image4} alt='gallery2' />
                    <p className="legend">Person2 - Volume</p>
                </div>
                <div className='slider-item'>
                    <img className='gallery-image'  src={image5} alt='gallery1' />
                    <p className="legend">Person3 - MegaVolume</p>
                </div>
        </Carousel>
        </div>
    )
}