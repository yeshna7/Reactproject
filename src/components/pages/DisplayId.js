import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DisplayId() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [error, setError] = React.useState('');
  // DOC REFERENCE https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/#:~:text=What%20is%20the%20useEffect%20cleanup,itself%20using%20the%20cleanup%20function.
  useEffect(() => {
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/details-fiche/' +
          id
      )
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        if (err.code === 'ERR_BAD_REQUEST')
          setError('UNKNOWN Id, PAGE DOES NOT EXIST');
        console.log(err);
        return;
      });
  }, [id]); // USE EFFECT CLEAN UP Pourquoi la fonction de nettoyage useEffect est-elle utile ?
  // CELA aide les développeurs à nettoyer les effets qui empêchent les comportements indésirables et optimisent les performances des applications.

  // a fonction de nettoyage useEffect ne s'exécute pas seulement lorsque notre composant veut se démonter, elle s'exécute également juste avant l'exécution du prochain effet planifié.
  //

  return (
    <div className="container text-center">
      <div className="card mt-4">
        <div className="card-body">
          <div>
            <h1>{users.id}</h1>
            <p className="text-danger"> {error}</p>
          </div>
          {users.title ? (
            <div>
              <h2> Title: {users?.title}</h2>
            </div>
          ) : (
            <div></div>
          )}
          <div> {users?.presentation}</div>
          <div>
            <img src={users?.logo?.url} alt=""></img>
          </div>
          {users.start_date_subscription ? (
            <div>
              <p> Start date: {users?.start_date_subscription}</p>
            </div>
          ) : (
            <div></div>
          )}

          {users.end_date_subscription ? (
            <div>
              <p> End date: {users?.end_date_subscription}</p>
            </div>
          ) : (
            <div></div>
          )}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DisplayId;
