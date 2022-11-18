// import React,{useState, useEffect} from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayId from './DisplayId';

function Retrieve() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://bat-recup-staging-backend.cleverapps.io/api/current-annoucement'
      )
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <ul className="list">
            {users.map((user) => (
              <li key={user.id}>
                <div className="title  mt-4">{user.title}</div>
                <div>
                  <img
                    src={user.logo.url}
                    alt=""
                    width="350"
                    key={user.logo.url}
                  ></img>
                </div>
                <Link
                  to={`/DisplayId/${user.id}`}
                  element={<DisplayId />}
                  className="btn btn-primary mt-4 "
                >
                  View
                </Link>
                <br></br>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Retrieve;
