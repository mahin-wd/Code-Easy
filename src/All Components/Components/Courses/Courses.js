import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Courses = () => {
    const selectedCourse = useLoaderData();
    const {title, img, description, fee, ratings} = selectedCourse;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='rounded' src={img} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='d-flex justify-content-evenly'>
                    <div className='d-flex justify-content-center'>
                    <p>Ratings: {ratings}</p>
                    <FaStar className='ms-1 text-warning'></FaStar>
                    </div>
                    <p><small>Course Fee: <span className='text-primary'>{fee}</span></small></p>
                </div>
                <div className="card-actions justify-end">
                <Link to="/payment"><button className="btn btn-primary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;