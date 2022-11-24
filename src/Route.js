import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ContactForm from './components/pages/ContactForm';
import Data from './components/pages/Data';
import DisplayId from './components/pages/DisplayId';
import Error from './components/pages/Error';
// import Form from './components/pages/form';
import Home from './components/pages/Home';
import Numbers from './components/pages/Numbers';
import Retrieve from './components/pages/Retrieve';
import Login from './components/pages/Login';

function Routine() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ContactForm" element={<ContactForm />} />
      {/* <Route path="/Form" element={<Form />} /> */}
      <Route path="/Numbers" element={<Numbers />} />
      <Route path="/Retrieve" element={<Retrieve />} />
      <Route path="/Data" element={<Data />} />
      <Route path="/DisplayId/:id" element={<DisplayId />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Routine;
