import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../All Components/Shared/Header/Header';
import '../All Components/Components/LeftNav/LeftNav'
import LeftNav from '../All Components/Components/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

        {/* adding side navigation */}
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg='10'>
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;