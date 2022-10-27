import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('https://code-easy-server.vercel.app/course-list')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])

    return (
        <div className='text-start lg:mt-20 ms-20 lg:fixed'>
            {
                courses.map(course => <p className='side-bar' key={course.id}>
                    <Link to={`courses/${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;