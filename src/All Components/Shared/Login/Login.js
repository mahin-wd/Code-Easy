import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <Form className='w-75 m-auto'>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className='w-100'>
                Log In
            </Button>
            <h6>Or,</h6>
            <div>
                <Link className='d-flex justify-content-center m-3 text-dark    '>
                <FaGoogle className='me-3'></FaGoogle>
                <FaGithub></FaGithub>
                </Link>
            </div>

            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </Form>
    );
};

export default Login;