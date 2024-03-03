import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.css";




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1>CS230L</h1>
            <h2>Section - 001</h2>
            <p>WVU ID: 800333252</p>
            <p>Hi I am Joe Black</p>
          </div>
        </div>
        <div className="row justify-content-center"> {/* Center the card row */}
          <div className="col-md-9"> {/* Set the width of the column containing the cards */}
            <div className="row justify-content-center"> {/* Center the cards within the column */}
              <div className="col-md-4">
                <Card name="01" color="primary" />
              </div>
              <div className="col-md-4">
                <Card name="02" color="danger" />
              </div>
              <div className="col-md-4">
                <Card name="03" color="success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;





