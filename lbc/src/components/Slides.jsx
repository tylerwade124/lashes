import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpeg'
 
export default function Slider () {
    
    const AutoplaySlider = withAutoplay(AwesomeSlider);


    return (
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={8000}
          className="gallery-carousel"
          animation="foldOutAnimation"
          bullets={false}
        >
            <div className="slide1">
                <img src = {image1}/>
            </div>
            <div className="slide2">
                <img src = {image2} height="1200px" width = "1000px" backgroundColor/>
            </div>
            <div className="slide3">
                <img src = {image1}/>
            </div>
            <div className="slide4">
                <img src = {image2} height="1200px" width = "1000px"/>
            </div>
        </AutoplaySlider>
    )

}