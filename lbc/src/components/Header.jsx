import Nav from './Nav'
import Contact from './Contact'

export default function Header () {

    
    return ( 
        <div className="header">
            <p className="title">LASHES</p>
            <p className="title2">By Courtney</p>
            <Contact />
            <button className='book-appt'>Book<br />Appointment</button>
            <Nav />
        </div>
    )
}