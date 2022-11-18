// import React,{useState, useEffect} from 'react';
import axios from 'axios';
import React, { useEffect, useState} from 'react';



function Retrieve() {
  const [users, setUsers] = useState([]);
  // useEffect permet de réaliser des effets : cela permet à notre composant de réaliser des actions après affichage, en choisissant quand cette action doit être réalisée. Le crochet useEffect est appelé après chaque rendu de votre composant.
  // Eh bien, ces types d'actions s'appellent des effets de bord, et pour cela, nous avons  useEffect. 😎 Ils nous permettent d'effectuer une action à un moment donné du cycle de vie de nos composants
  useEffect(() => {
    // Alors là, dès que l'utilisateur arrive sur votre page fetchData, vous allez appeler les données dynamiques de l'api et une fois que l'api ne retourne plus d'erreurs vous mettez à jour les états pour stocker le retour JSON QUE VOUS ALLEZ AFFICHER après appeler l'API
    // tout cela se produit avant que la page ne soit correctement rendue
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement' // create an .env file to store the api url
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
      {/*Si vous connaissez le type de données array , ici nous faisons une boucle */}
      {/*Il y a plusieurs façons de faire la boucle, c'est-à-dire parcourir les éléments du tableau d'objets mais Javascript il existe déjà une puissante fonction native qui va vous permettre de faire cela facilement et c'est le .MAP*/}
      {/* vous pouvez utiliser foreach ou utiliser la boucle classique for

              ex : for(i=0 ; i<data.length ; i++) {

            }

           */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
            {user.title}
            </div>
            <div>
            {user.presentation}
            </div>
            <div>
            {user.status_subscription}
            </div>
            <div>
            {user.start_date_subscription}
            </div>
            <div>
            {user.end_date_subscription}
            </div>
            <div> 
            {user.social_link_fb}
            </div>
           <div>
           {user.social_link_insta}
           </div>
           <div>
           {user.web_site_url}
           </div>
           <div>
           {user.phone_number}
           </div>
           <div>
           <img src={user.logo.url} alt="" key={user.logo.url}></img>
           </div>
           <div>
            {user.photos.map((photo) => (
              <img src={photo.url} alt="" width="100" key={photo.url}></img>
            ))}
            </div>

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
<br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Retrieve;
