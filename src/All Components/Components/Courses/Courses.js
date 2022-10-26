import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const selectedCourse = useLoaderData();
    const {title, img, detail} = selectedCourse;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='rounded' src={img} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{detail}</p>
                <div className="card-actions justify-end">
                <Link to="/payment"><button className="btn btn-primary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;