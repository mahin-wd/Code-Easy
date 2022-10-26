import React from 'react';  
const Card = ({course}) => {
    const {title, img, detail, ratings, view, instructor} = course;
    return (
        
            <div className="card w-80 bg-base-100 shadow-md">
            <figure><img className='rounded' src={img} alt="img" /></figure>
            <div className="card-body card-info">
                <h2 className="card-title">{title}</h2>
                <h6>{detail}</h6>

                <div className='authore-info mt-3 d-flex justify-around'>
                    <img className='w-7 h-7 rounded-5' src={instructor.img_url} alt="" />
                    <p>{instructor.name}</p>
                </div>

                <div className='d-flex justify-content-between mt-0'>
                <p><small>Total View: {view}</small></p>
                <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
            </div>
        
    );
};

export default Card;