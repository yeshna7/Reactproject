
import axios from 'axios';
import React, { useEffect, useState } from 'react';
 import {useParams} from 'react-router-dom'

function DisplayId() {
 const {id} = useParams();
 const [users, setUsers] = useState([]);
 const[ error,setError]=React.useState('');
 

  
  useEffect(() => {
   
    axios
      .get('https://bat-recup-staging-backend.cleverapps.io/api/details-fiche/' + id)
      
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
         if(err.code ==='ERR_BAD_REQUEST')
         setError("UNKNOWN Id, PAGE DOES NOT EXIST")
        console.log(err);
         return
         
      });
      // if(err.body.valiadtion.length > 0){

      // }
  });

  return (
    <div className='container text-center'>
      <div className='card mt-4'>
      <div className='card-body'>
      <div>
       <h1>{users.id}</h1>
       <p className='text-danger'> {error}</p>
        </div>
     <div>
     <h2> Title: {users?.title}</h2>
     </div>
      <div> {users?.presentation}</div>
        <div>
        <img src={users?.logo.url} alt="" ></img>
        </div>   
        <div>
           <p> Start date: {users?.start_date_subscription}</p>
         </div>
         <div>
           <p> End date: {users?.end_date_subscription}</p> 
        </div>
        
            <a href={users?.social_link_fb}  target='_blank' rel="noopener noreferrer"> Facebook  </a>
          
           <div>
           <a href={users?.social_link_insta} target='_blank' rel="noopener noreferrer" >Instagram </a>
         
           </div>
           <div>
           <a href={users?.web_site_url} target='_blank' rel="noopener noreferrer" > Web link </a>
          
           </div>
           <div>
          <p> Phone number: {users?.phone_number}</p> 
           </div>
          
            <div> 
            {users?.subscription_name}
            {users?.subscription_limite}
           </div>

           <div>
            {users?.activities.name}
            </div>

            <div>
            {users?.thematique.name}
            </div>

            <div>
            {users?.adress.line1}
            {users?.adress.line2}
            {users?.adress.city}
            {users?.adress.postalCode}
            {users?.adress.country}
            {users?.adress.countryCode}
        </div>

        <div>
            {users.adress.location.type}
            {users.adress.location.lat}
            {users.adress.location.lng}
        </div> 


    </div>       
           
</div>

    </div>
  );
}

export default DisplayId;
