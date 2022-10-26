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
        <div>
            {
                courses.map(course => <Link to={`/courses/${courses.id}`}>
                <p key={course.id}>{course.name}</p>
                </Link>)
            }
        </div>
    );
};

export default LeftNav;