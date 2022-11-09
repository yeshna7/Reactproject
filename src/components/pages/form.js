import React from 'react'
import { useState } from 'react';


function Form () {
    const initialValues = {Nomdefamille: "",Prénom:"",email:"" };
    const [formValues , setFormValues]= useState(initialValues);
    // const [formErrors , setFormErrors]= useState({});
    


    const handleChange =(e) =>{
        // console.log(e.target);
        const { name, value} =e.target;
        setFormValues({...formValues, [name]: value});
        // console.log(formValues);
    };
        const handleSubmit =(e) => {
            e.preventDefault();
            // setFormErrors(validate(formValues));
            
        };

        // const validate =(values) => {
        //     const errors = {};
        //     // const regex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
        //     if (!values.Nomdeamiile) {
        //         errors.Nomdeamiile = "Nom de famille is required";
        //     }
        //     if (!values.Prénom) {
        //         errors.Prénom = " Prénom is required";
        //     }
        //     if (!values.email) {
        //         errors.email = "email is required";
        //     }
        //     return errors;
        // };

   
return (
    <div className='container'>
    <div className='row'>
        <form onSubmit={handleSubmit}>
            <h1> Contactez-Nous</h1>
            <div className='field'>
                <label>Nom de famille </label>
                {/* {touched.Nomdeamiile && errors.Nomdeamiile && <p>{errors.Nomdeamiile}</p>} */}
                <input type="text" name="Nom de famille" placeholder="Nom de famille" 
                value={ formValues.Nomdefamille}  onChange={handleChange}/>
            </div>

            <div className='field'>
                <label>Prénom </label>
                {/* {touched.Prénom && errors.Prénom && <p>{errors.Prénom}</p>} */}
                <input type="text" name="Prénom" placeholder="Prénom" 
                value={ formValues.Prénom} onChange={handleChange} />
            </div>

            <div className='field'>
                <label>E-mail </label>
                {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
                <input type="text" name="E-mail" placeholder="E-mail" 
                value={ formValues.email} onChange={handleChange} />
            </div>
            <div>
            <button className='submit' >Submit</button>
            </div>
        </form>
    </div>
</div>
);
}

export default Form