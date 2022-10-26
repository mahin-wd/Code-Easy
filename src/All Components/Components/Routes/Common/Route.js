import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../../Layout/Main';
import Home from '../../../../All Components/Components/Home/Home'
import Login from '../../../Shared/Login/Login';
import SignUp from '../../../Shared/SignUp/SignUp';
import Blog from '../../Blog/Blog';
import FAQ from '../../FAQ/FAQ';
import Courses from '../../Courses/Courses';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:4000/courses'),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`http://localhost:4000/courses/${params.id}`),
                element: <Courses></Courses>
            }
        ]
            
    }
]);