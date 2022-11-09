import React from 'react';
import './App.css';
import Routine from './Route'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <div>
      <Router> 
      <Header />
      < Navbar />
      <Routine />
    </Router>
    
    </div>
  );
}

export default App;




