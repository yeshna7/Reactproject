import React from 'react';

function ContactForm() {
 const [surname, setsurname] = React.useState('')
 const [name, setname] = React.useState('')
  const [email, setemail] = React.useState('')
  const[error, setError]=React.useState('')
  // const[message,setMessage]= React.useState('')
 const [isSubmit, setSubmit] = React.useState(false)

 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   function SurnameChange(text) {
    console.log(text.target.value)
    setsurname(text.target.value)
   }

  function NameChange(text) {
    console.log(text.target.value);
    setname(text.target.value);
  }

   function EmailChange(text){
    console.log(text.target.value)
    setemail(text.target.value)

    if(regex.test(email)===false){
      setError("");
      console.log('error not okay')
      
    }else{
      console.log('error okay')
      setError('please enter valid email')
      return true;
    }
    }

   function OnClickForm(e){
    setSubmit(true)
    e.preventDefault();
   }

  //  const emailValidation =(e) => {
  //   const regEx= /[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8(.[a-z{2,8}])?/g
  //   if(regEx.test(email)){
  //     setMessage('EMAIL Is VALID')
  //   } 
  //  };
    

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
          {/* <p>{message}</p> */}
          {/* <p>{emailValidation}</p> */}
        </div>
        <button className="btn btn-danger" onClick={OnClickForm} > Submit
      
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
