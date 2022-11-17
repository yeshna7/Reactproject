// import React,{useState, useEffect} from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Retrieve() {
    const [users, setUsers] = useState([]);
    // const [page, setPage] =useState([]);

  useEffect(() => {
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement'
      )
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.title}
            {user.presentation}
            {user.status_subscription}
            {user.start_date_subscription}
            {user.end_date_subscription}
            {user.social_link_fb}
            {user.social_link_insta}
            {user.web_site_url}
            {user.phone_number}
            <img src={user.logo.url} alt="" key={user.logo.url}></img>
            {user.photos.map((photo) => (
              <img src={photo.url} alt="" width="100" key={photo.url}></img>
            ))}

           <div> 
            {user.subscription.id}
            {user.subscription_name}
            {user.subscription_limite}
           </div>

            <div>
            {user.activities.id}
            {user.activities.name}
            </div>

           <div>
            {user.thematique.name}
            {user.thematique.id}
            </div>

         <div>
            {user.adress.id}
            {user.adress.line1}
            {user.adress.line2}
            {user.adress.city}
            {user.adress.postalCode}
            {user.adress.country}
            {user.adress.countryCode}
        </div>

        <div>
            {user.adress.location.type}
            {user.adress.location.lat}
            {user.adress.location.lng}
        </div>
        
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Retrieve;
