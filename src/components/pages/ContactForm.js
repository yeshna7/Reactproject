import React from 'react';

function ContactForm() {
  const [surname, setsurname] = React.useState('');
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const[error, setError]=React.useState('');
  const [isSubmit, setSubmit] = React.useState(false);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  function SurnameChange(text) {
    console.log(text.target.value);
    setsurname(text.target.value);
  }

  function NameChange(text) {
    console.log(text.target.value);
    setname(text.target.value);
  }

  function EmailChange(text){
    setemail(text.target.value);
    console.log(text.target.value);

    if(regex.test(text.target.value)===false){
      setError('please enter valid email')
      
    } else {
      setError("");
     
    }
  }

  function OnClickForm(e) {
    setSubmit(true)
    e.preventDefault(); // J'ai ajouter cela , pour empecher la page de reloader apres le click
  }

  return (
    <div className="container">
      <h2>Contactez-Nous</h2>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor=" Nom de famille">
            Nom de famille
          </label>
          <input
            className="form-control"
            type="text"
            id=" Nom de famille"
            value={surname}
            onChange={SurnameChange}
          />
          {isSubmit && surname === '' && <p> This field is required </p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor=" Prénom">
            Prénom
          </label>
          <input
            className="form-control"
            type=" Prénom"
            id="Prénom"
            value={name}
            onChange={NameChange}
          />
          {isSubmit && name === '' && <p> This field is required </p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            E-mail
          </label>
          <input className="form-control" type="email" id="email" value={email} onChange={EmailChange} />
          {isSubmit && email === ""  && <p> This field is required </p>}
          <p className='text-danger'> {error}</p>
        </div>
        <button className="btn btn-danger" onClick={OnClickForm} > Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
