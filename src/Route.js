
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Form from './components/pages/form';
import ContactForm from './components/pages/ContactForm';
import Error from './components/pages/Error';
import Numbers from "./components/pages/Numbers"
import Retrieve from "./components/pages/Retrieve"
import DisplayId from './components/pages/DisplayId'
import Data from './components/pages/Data'

function Routine(){
    return (
         <Routes>
           <Route path='/home' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path ='/ContactForm' element={<ContactForm />} />
           <Route path ='/Form' element={<Form />} />
          <Route path ='/Numbers' element={<Numbers />} />
          <Route path ='/Retrieve' element={<Retrieve />} />
          <Route path ='/Data' element={<Data/>} />
          <Route path ='/DisplayId/:id' element={<DisplayId />} />

           <Route path='/*' element={<Error />} />
         </Routes>
   
    );
}

export default Routine
