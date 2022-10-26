import React from 'react';
import './Payment.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Payment = () => {

    return (
        <Form className='w-75 m-auto'>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Payment Amount</Form.Label>
                <Form.Control name="amount" type="number" placeholder="Amount" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Bank Account Number</Form.Label>
                <Form.Control name="ac" type="number" placeholder="Bank Account Number" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Bank Account Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Bank Account Password" />
            </Form.Group>

            <Button className='w-100' variant="primary" type="submit">
                Payment
            </Button>
        </Form>
    );
};

export default Payment;