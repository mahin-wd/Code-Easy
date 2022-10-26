import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <Form className='w-75 m-auto'>
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
                <Form.Control name="image" type="" placeholder="Image URL" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className='w-100'>
                Sign Up
            </Button>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </Form>
    );
};

export default SignUp;