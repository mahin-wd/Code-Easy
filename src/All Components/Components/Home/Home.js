import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div className='mt-5 grid lg:grid-cols-2 lg:mx-20 lg:p-5 gap-5 md:grid-col-1 sm:p-5'>
            {
                allCourse.map(course => <Card
                key={course}
                course={course}></Card>)
            }
        </div>
    );
};

export default Home;