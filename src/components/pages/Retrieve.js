// import React,{useState, useEffect} from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            {user.subscription.id}
            {user.subscription_name}
            {user.subscription_limite}
            {user.activities.id}
            {user.activities.name}
            {user.thematique.name}
            {user.thematique.id}
            {user.adress.id}
            {user.adress.line1}
            {user.adress.line2}
            {user.adress.city}
            {user.adress.postalCode}
            {user.adress.country}
            {user.adress.countryCode}
            {user.adress.location.type}
            {user.adress.location.lat}
            {user.adress.location.lng}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Retrieve;
