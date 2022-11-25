import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Dashboard () {
    const navigate = useNavigate()

     useEffect(() => {
         if (!localStorage.getItem('jwt')) {
            navigate('/Login')

         }
     })


    return (
        <div className='container'>
          <div className='card mt-4'>
            <div className='card-body'>
              <h2 className='title text-center'>Dashboard</h2>
              <div className='card mt-4'>
             
              </div>
            <button  className='logoutBut mt-3'
             onClick={() => {
                localStorage.removeItem('jwt')
                navigate('/Login')
            }} 
            > LOGOUT </button>
          </div>
          </div>
        </div>
    );
}

export default Dashboard;