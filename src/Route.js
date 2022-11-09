
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Form from './components/pages/form';
import ContactForm from './components/pages/ContactForm';
import Error from './components/pages/Error';

function Routine(){
    return (
         <Routes>
           <Route path='/home' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path ='/ContactForm' element={<ContactForm />} />
           <Route path ='/Form' element={<Form />} />
           <Route path='/*' element={<Error />} />
         </Routes>
   
    );
}

export default Routine
