import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation, useParams, NavLink } from "react-router-dom";
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
import WrongRouteState from "../placeholder/WrongRouteState";

const Result = ({
    ...props}) => {
    const [activeTab, setActiveTab] = useState("repositories")
    // 
    let { name, tab } = useParams();
    let location, { search } = useLocation();
    // let  = useLocation();

    useEffect(() => {
        setActiveTab(tab)
    }, [tab]);
    
    return (
        <Fragment>
           <nav className='border-bottom py-3 sticky-top top-0 bg-white'>
                <Container>
                    <Row className="">
                        <Col xl={3} md={4} sm={12}>

                        </Col>
                        <Col xl={9} md={8} sm={12}>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <NavLink to={`/${name}/repositories`}
                                        className={`text-decoration-none p-3 ${activeTab === "repositories" ? "border border-0 border-3 border-bottom border-primary" : ""}}`}>
                                        <i className='bi bi-journal-bookmark'></i> Repositories
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to={`/${name}/organisations`} 
                                        className={`text-decoration-none p-3 ${ activeTab === "organisations" ? "border border-0 border-3 border-bottom border-primary" : ""}}`}>
                                        <i className='bi bi-building'></i> Organisations
                                    </NavLink>
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
                            {
                                activeTab === "repositories" ? 
                                    <Repositories/>
                                :
                                activeTab === "organisations" ? 
                                    <Organisations/>
                                :
                                    <WrongRouteState/>
                                }
                        </Col>
                    </Row>
                </Container>
            </section> 
        </Fragment>
    )
}

export default Result
