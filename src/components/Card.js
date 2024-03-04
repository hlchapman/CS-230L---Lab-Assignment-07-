import React from 'react';

const Card = ({ title, color, children }) => {
    return (
        <div className="card" style={{ maxWidth: "18rem", backgroundColor: color}}>
            <div className="card-body">
                <h5 className="card-title text-white">{title}</h5> {/*text-white is a class that sets text color to white*/}
                <p className="card-text text-white">{children}</p> 
            </div>
        </div>
    );
};

export default Card;

