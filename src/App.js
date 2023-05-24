import React, { useState } from "react";
import "./App.css";


const App = () => {

  const [weight,setweight] = useState(0);
  const [height,setheight] = useState(0);
  const [bmi,setbmi] = useState('');
  const [message,setmessage] = useState('');

  let calcbmi = (e) => {
    e.preventDefault();
    if(weight === 0 || height === 0){
      alert("Invalid Input");
    }
    else{
      let bmi = (weight/(height/100)**2)
      setbmi(bmi.toFixed(2));

      if(bmi < 18.5){
        setmessage('You are underweight');
      }
      else if(bmi>=18.5 && bmi <= 24.9){
        setmessage('You are healthy weight');
      }
      else if(bmi>=25 && bmi <= 29.9){
        setmessage('You are overweight');
      }
      else{
        setmessage('You are obese');
      }
    }
  }

  let imgsrc;
  if(bmi<1){
    imgsrc=null;
  }
  else if(bmi<18.5){
    imgsrc=require('./images/underweightimg.jpg')
  }
  else if(bmi>=18.5 && bmi <= 24.9){
    imgsrc=require('./images/healthyweight.jpg')
  }
  else if(bmi>=25 && bmi <= 29.9){
    imgsrc=require('./images/overweight.avif')
  }
  else {
    imgsrc=require('./images/obsese.avif')
  }


  let reload = () => {
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (kg)</label><br></br>
            <input
              type="text"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Height (cm)</label><br></br>
            <input
              type="text"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
              
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline " type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
          <div className="img-container">
          <img src={imgsrc} alt=""></img>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
