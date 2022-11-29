import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = React.useState(false);
  const [loading, setLoading]= React.useState( false);
  

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [email, password]);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  function EmailChange(text) {
    setEmail(text.target.value);
    console.log(text.target.value);

    if (regex.test(text.target.value) === false) {
      //  setError('please enter valid email')
    } else {
      setError('');
    }
  }

  function PasswordChange(text) {
    setPassword(text.target.value);
    console.log(text.target.value);

    if (regex1.test(text.target.value) === false) {
      //  setError('please enter valid pswd')
    } else {
      setError('');
    }
  }

  function OnClickForm(e) {
    setSubmit(true);
    setLoading(true);
    setEmail('');
    setPassword('');
    e.preventDefault();

    const payload = {
      identifier: email,
      password: password,
    };

    axios
      .post(
        'https://bat-recup-staging-backend.cleverapps.io/api/users-permissions/login-annuaire',
        payload
      )

      .then((res) => {
        console.log(res.data);
        localStorage.setItem('jwt', res?.data?.jwt);
        navigate('/Dashboard');
        setLoading(true);
      
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === 'ERR_BAD_REQUEST') setError('No access!');
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1 className="title text-center mt-4">Login details</h1>
      <form className="form-content  text-center">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control mt-3 text-center"
            id="email"
            placeholder="Enter email"
            value={email}
            ref={emailRef}
            onChange={EmailChange}
          />
          {isSubmit && email === '' && <p> This field is required </p>}
          {email !== '' && regex.test(email) === false && (
            <p> Enter valid email </p>
          )}
          <p className="text-danger"> {error}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control mt-3 text-center"
            id="pwd"
            placeholder="Enter password"
            value={password}
            onChange={PasswordChange}
          />
          {isSubmit && password === '' && <p> This field is required </p>}
          {password !== '' && regex1.test(password) === false && (
            <p> Enter valid password </p>
          )}
          <p className="text-danger"> {error}</p>
        </div>
        <div>
         {!loading && <button className="btn btn-primary mb-3" onClick={OnClickForm}>
            {' '} 
            Log in
          </button>}
          {loading && <button className="btn btn-primary mb-3" disabled>
            {' '} 
           <i className='fas fa-spinner fa-spin'></i> Loading...
          </button>}
        
        </div>
      </form>
    </div>
  );
}

export default Login;
