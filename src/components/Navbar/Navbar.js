import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
    // const [click, setClick] = useState  (false);
    // const handleClick = () => setClick(!click);
    return (
        <>  
        <nav className='navbar'>
        <div className='navbar-container'>
        <ul className= 'nav-mwnu'>
            <li className='nav-item'>
               <Link to='/Home' className='nav-links'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/About' className='nav-links'> About</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className='nav-links'> Contact</Link>
            </li>
            <li className='nav-item'>
                <Link to='/form' className='nav-links'> Form</Link>
            </li>
            <li className='nav-item'>
                <Link to='/ContactForm' className='nav-links'>Contact Form</Link>
            </li>
        </ul>

        </div>
        </nav>
        </>
    );
}

export default Navbar