import React from 'react';
import { Link} from 'react-router-dom';

function Header(){
    return (
        <div>
        <nav>
         <Link to='/home'> Home</Link>
         <Link to='/about'> About</Link>
         <Link to='/contact'> Contact</Link>
         <Link to='/ContactForm'> Contact form</Link>
         <Link to='/Retrieve'> Retrieve</Link>
         {/* <Link to='/form'> Form</Link> */}
         <Link to='/Numbers'> Numbers</Link>
         <Link to='/Data'> Data</Link>
         {/* <Link to='/DisplayId'>Display Id</Link> */}
        </nav>

        </div>

    );
}

export default Header
