

export default function Services () {

    return (
        <div className='services'>

           <div className='styles'>

            <h2>Lash Extension Styles</h2>

            <div className='style-container'>
                <div className='style-1'>
                    <h3>Classic</h3>
                    <p>Thicker, longer lashes providing length without too much volume.</p>
                </div>
                <div className='style-2'>
                    <h3>Hybrid</h3>
                    <p>A mix of TrueVolume and Classic lashes for simple length with a dose of density.</p>
                </div>
                <div className='style-3'>
                    <h3>Volume</h3>
                    <p>Fullness, length, and curl to create that dramatic look.</p>
                </div>
                <div className='style-4'>
                    <h3>MegaVolume</h3>
                    <p>Our most dramatic, voluminous, and dense lash look yet.</p>
                </div>
            </div>

           </div>

           <div className='full-set-price'>

            <h2>Full Set Pricing</h2>

            <div className='full-set-container'>
                <div className='new-client'>
                    <h3>New Client Initial Full Set</h3>
                    <ul className='services-list'>
                        <li>Classic: $119.99</li>
                        <li>Hybrid: $139.99</li>
                        <li>Volume: $159.99</li>
                        <li>MegaVolume: $179.99</li>
                    </ul>
                </div>
                <div className='member'>
                    <h3>Member</h3>
                    <ul className='services-list'>
                        <li>Classic: $120</li>
                        <li>Hybrid: $160</li>
                        <li>Volume: $180</li>
                        <li>MegaVolume: $220</li>
                    </ul>
                </div>
                <div className='non-member'>
                    <h3>Non-Member</h3>
                    <ul className='services-list'>
                        <li>Classic: $160</li>
                        <li>Hybrid: $210</li>
                        <li>Volume: $230</li>
                        <li>MegaVolume: $270</li>
                    </ul>
                </div>

            </div>

           </div>

           <div className='refill'>

            <h2>Refill</h2>

            <div className='refill-container'>
                <div className='member'>
                    <h3>Member</h3>
                    <ul className='services-list'>
                        <li>Classic: $60</li>
                        <li>Hybrid: $80</li>
                        <li>Volume: $90</li>
                        <li>MegaVolume: $110</li>
                    </ul>
                </div>
                <div className='non-member'>
                    <h3>Non-Member</h3>
                    <ul className='services-list'>
                        <li>Classic: $80</li>
                        <li>Hybrid: $105</li>
                        <li>Volume: $115</li>
                        <li>MegaVolume: $135</li>
                    </ul>
                </div>

            </div>

            </div>

        </div>
    )
}