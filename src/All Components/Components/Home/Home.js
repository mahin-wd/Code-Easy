import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div className='grid lg:grid-cols-2 md:grid-col-1 gap-5 mt-20 lg:mx-20 sm:p-5'>
            {
                allCourse.map(course => <Card
                key={course}
                course={course}></Card>)
            }
        </div>
    );
};

export default Home;