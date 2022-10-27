import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Components/Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const {loginWithEmailAndPass, loginWithGoogle, loginWithGithub, setLoading} = useContext(AuthContext);
    const navigation = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('');

    const provider = new GoogleAuthProvider();
    const newProvider = new GithubAuthProvider();

    const googleLogin = () => {
        loginWithGoogle(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigation('/')
        })
        .catch(e => console.error(e));
    }

    const githubLogin = () => {
        loginWithGithub(newProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigation('/')
        })
        .catch(e => console.error(e));

    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPass(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigation(from, {replace: true})
        })
        .catch (error => {
            console.error(error);
        setError(error.message);
        })
        .finallu(() => {
            setLoading(false);
        })
    }
    

    return (
        <Form className='w-75 m-auto' onSubmit={handleLogin}>
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
                <FaGoogle onClick={googleLogin} className='me-3'></FaGoogle>
                <FaGithub onClick={githubLogin}></FaGithub>
                </Link>
            </div>

            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <p className='text-danger'>{error}</p>
        </Form>
    );
};

export default Login;