import React from 'react';

const Card = ({course}) => {
    const {title, img, detail} = course;
    return (
        
            <div className="card w-96 bg-base-100 shadow-md">
            <figure><img className='rounded' src={img} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{detail}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Purces Now</button>
                </div>
            </div>
            </div>
        
    );
};

export default Card;