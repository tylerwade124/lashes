import { Link } from 'react-router-dom'

export default function Nav () {


    return (
        <div className='nav'>
            <Link className='nav-home' to = '/'>Home</Link>
            <Link className='nav-about' to = '/about'>About</Link>
            <Link className='nav-expectations' to = '/expectations'>Expectations</Link>
            <Link className='nav-scheduling' to = '/scheduling'>Scheduling</Link>
            <Link className='nav-specials' to = '/specials'>Specials</Link>
            <Link className='nav-testimonials' to = '/testimonals'>Testimonials</Link>
        </div>
    )
}