import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthProvider';

const SignUp = () => {
    const {signUpHandler} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signUpHandler(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/login');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });

    }
    return (
        <Form className='w-75 m-auto' onSubmit={handleSignUp}>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="photoURL" type="" placeholder="Image URL" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className='w-100'>
                Sign Up
            </Button>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
            <p className='text-danger'>{error}</p>
        </Form>
    );
};

export default SignUp;