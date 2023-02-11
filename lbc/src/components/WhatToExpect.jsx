import image1 from '../assets/image1.jpg'

export default function WhatToExpect () {

    return (
        <div className='wte'>
            <h1 className='wte-title'>Before your appointment ...</h1>
        <div className='wte-container'>
            <div className='grid-item-3'>
                <img className='wte-image' src={image1}></img>
            </div>
            <div className='grid-item-2'>
                <p className='grid-item-2-title'>What to expect ...</p>
                <ul className='wte-list'>
                    <li>Show up with a fresh face (no makeup, mascara, or sunscreen).</li>
                    <li>Plan on your visit to last between 90 and 120 minutes.</li>
                    <li>Your stylist will help you choose the best lash look for you!</li>
                    <li>Relax on a comfortable, cushioned bed, and your stylist will apply your extensions one by one.</li>
                </ul>
            </div>
        </div>
        </div>
    )
}