import WhatToExpect from './WhatToExpect'
import About from './About'
import Services from './Services'
import Slides from './Slides'

import stockeye from '../assets/stock-eyelash.jpeg'
import stockeye2 from '../assets/stock-eyelash-2.webp'
import stockeye3 from '../assets/stock-eyelash-3.jpeg'

export default function Home () {


    return (
        <div className="home">
            <div className='flex-container'>
                <div className='stockeye2-container'>
                    <img className='stockeye2' src={stockeye2} alt='stockim'></img>
                </div>
                <div className='stockeye-container'>
                    <img className='stockeye' src={stockeye} alt='stockim'></img>
                </div>
                <div className='stockeye3-container'>
                    <img className='stockeye3' src={stockeye3} alt='stockim'></img>
                </div>
            </div>
            
            <Services />
            <About />
            <WhatToExpect />
            <Slides />
        </div>
    )
}