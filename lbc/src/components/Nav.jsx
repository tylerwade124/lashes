import { Link } from 'react-router-dom'

export default function Nav () {


    return (
        <div className='nav'>
            <Link className='nav-home' to = '/'>Home</Link>
            <Link className='nav-styles' to = '/about'>Styles</Link>
            <Link className='nav-pricing' to = '/expectations'>Pricing</Link>
            <Link className='nav-about' to = '/scheduling'>About</Link>
            <Link className='nav-wte' to = '/specials'>What to Expect</Link>
            <Link className='nav-gallery' to = '/testimonals'>Gallery</Link>
        </div>
    )
}