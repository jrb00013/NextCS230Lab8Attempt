
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";




const Card = ({ name, color }) => {
    return (
        <div className={`card text-white bg-${color} mb-3`} style={{ maxWidth: '18rem' }}>
            <div className="card-header">Card {name}</div>
            <div className="card-body">
                <h5 className="card-title">Card {name}</h5>
                <p className="card-text"> Sample Content would be here for{name}.</p>
            </div>
        </div>
    );
};




export default Card;












