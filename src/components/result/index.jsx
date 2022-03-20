import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// react components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// resources
import AppLogo from "../../assets/images/logo.png";
// components
import User from '../user';
import Repositories from "../repositories";
import Organisations from "../organisations";

const Result = ({
    ...props}) => {


    
    return (
        <Fragment>
           <nav className='border-bottom py-3'>
                <Container>
                    <Row className="">
                        <Col xl={3} md={4} sm={12}>

                        </Col>
                        <Col xl={9} md={8} sm={12}>
                            <Nav variant="pills" defaultActiveKey="/search?tab=repositories">
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/search?tab=repositories">
                                        <i className='bi bi-journal-bookmark'></i> Repositories
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/search?tab=organisations">
                                        <i className='bi bi-building'></i> Organisations
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </nav>
            <section className=''>
                <Container>
                    <Row>
                        <Col xl={3} md={4} sm={12}>
                            <User/>
                        </Col>
                        <Col xl={9} md={8} sm={12}>
                            <Repositories/>
                        </Col>
                    </Row>
                </Container>
            </section> 
        </Fragment>
    )
}

export default Result
