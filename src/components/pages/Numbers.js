import React ,{useState}from "react";

function Numbers() {
    const [number, setNumber] = useState('');
    const[message, setMessage]=React.useState('');
    const [isSubmit, setSubmit] = React.useState(false);

    const regex = /^\d+(\.\d{1,2})?$/;

    function numcheck(){
        console.log(number);
        if(number === '' ){
            console.log("The number is required");
            
        }
        else if(number % 2 === 0){   
            console.log("The number is even.");
            setMessage('The number is even');
        
        }
        else {
            console.log("The number is odd.");
            setMessage('The number is odd');
        } 
    }

    
    function NumberChange(number) {
        console.log(typeof number.target.value);
        setMessage("");

       const replaced1 = number.target.value.replace(/,/g, '.').replace(/\s/g, "");
       // parseFloat
      console.log(typeof parseFloat(replaced1))
       setNumber(replaced1);

       console.log(typeof replaced1);
     


       

        if(regex.test(number.target.value)===false){
            //  setMessage('please enter valid number')
            
           } else {
            setMessage("");
           
           }
    }

    function OnClickForm(e) {
        numcheck()
        setSubmit(true)
        e.preventDefault();
        
    }

    function checkValidation () {
        if(!number ||!isNaN(number) ) {
            return false
        } else {
            return true
        }

        // return !number ||!isNaN(number) ? true : false
    }

    return (
        <div>
        <h2>Pair or unpair numbers</h2>
        <form id="form">
        <div className="mb-3">
          <label className="form-label"  htmlFor=" Enter your number">
           Enter your number
          </label>
          <input
            className="form-control"
            type="text"
            onChange={NumberChange}
            value={number}
            id="num" 
           />
            {isNaN(number) ? "Please insert a valable number" :""}
            {isSubmit && number === '' && message!=="" && <p> This field is required </p>}
            <p className='text'> {message}</p>
            
            { !isNaN(number) && number!== "" && regex.test(number)===false && <p> Decimal number </p>}

           <button disabled={checkValidation()} onClick={OnClickForm} > Submit</button>
           

         
        </div>
        </form>
        </div>
    );
}

export default Numbers