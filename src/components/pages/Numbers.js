import React ,{useState}from "react";

function Numbers() {
    const [number, setNumber] = useState('');
    const [isSubmit, setSubmit] = React.useState(false);



    function numcheck(){
        console.log(number);
        if(number === '' ){
            console.log("The number is required");
        }
        else if(number % 2 === 0){   
            console.log("The number is even.");
        }
        else{
            console.log("The number is odd.");
        }  
    }

    
    function NumberChange(text) {
        setNumber(text.target.value);
    }

    function OnClickForm(e) {
        numcheck()
        setSubmit(true)
        e.preventDefault();
        
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
            type="number"
            //value={number}
             onChange={NumberChange}
            id="num" 
           />
            {/* { number!== "" && num && <p>  </p>} */}
            {isSubmit && number === '' && <p> This field is required </p>}

           <button type="submit" onClick={OnClickForm}> Submit</button>
         
          </div>
        </form>
        </div>
    );
}

export default Numbers