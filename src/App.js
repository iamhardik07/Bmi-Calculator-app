import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const hs = height * height;
      const calculatedBMI = weight / hs;
      setBMI(calculatedBMI.toFixed(1));

      if (calculatedBMI <= 18.5) {
        setMessage('You are underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
        setMessage('You are a healthy weight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={calculateBMI}>
          <div className='WandH'>
            <label>Weight(kg)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className='WandH'>
            <label>Height(m) </label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div>
            <h3>Your BMI is: {bmi}</h3>
            <p style={{ fontSize: 18 , fontWeight : 450}}>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
