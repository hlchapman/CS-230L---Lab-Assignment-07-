import React from 'react';

const Card = ({ title, color, children }) => {
    return (
        <div className="card" style={{ width: "18rem", backgroundColor: color }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{children}</p>
            </div>
        </div>
    );
};

export default Card;

