import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:4000/course-list')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])

    return (
        <div className='text-start'>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`courses/${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;