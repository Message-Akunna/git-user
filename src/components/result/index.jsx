import React, { Fragment, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { useParams, NavLink } from "react-router-dom";
// react components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
// resources
// import AppLogo from "../../assets/images/logo.png";
// components
import User from '../user';
import Repositories from "../repositories";
import Organisations from "../organisations";
import WrongRouteState from "../placeholder/WrongRouteState";
// actions
import { getUser } from "../../reduxStore/actions/userActions.js";
// 
import EmptyState from "../placeholder/EmptyState";

const ProcessDetails = ({
    user,
    activeTab,
    routeName
}) => {
    let  { login, name, avatarUrl, bio, createdAt } = user?.data?.user;
    let userData = {
        login: login, 
        name: name, 
        avatarUrl: avatarUrl, 
        bio: bio, 
        createdAt: createdAt
    }
    let repositories = user?.data?.user?.repositories?.edges;
    let organizations = user?.data?.user?.organizations?.edges;
    // 
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
                                    <NavLink to={`/${routeName}/repositories`}
                                        className={`text-decoration-none p-3 ${activeTab === "repositories" ? "border border-0 border-3 border-bottom border-primary" : ""}}`}>
                                        <i className='bi bi-journal-bookmark'></i> Repositories
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to={`/${routeName}/organisations`} 
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
                            <User userDetails={userData}/>
                        </Col>
                        <Col xl={9} md={8} sm={12}>
                            {
                                activeTab === "repositories" ? 
                                    <Repositories repositories={repositories}/>
                                :
                                activeTab === "organisations" ? 
                                    <Organisations organizations={organizations}/>
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

const Result = ({
    user,
    getUser,
    isUserLoading,
    isUserLoaded,
    ...props
}) => {
    const [activeTab, setActiveTab] = useState("repositories")
    // 
    let { name, tab } = useParams();
    // let location, { search } = useLocation();
    // let  = useLocation();
    
    useEffect(() => {
        getUser(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name]);
    // 
    useEffect(() => {
        setActiveTab(tab)
    }, [tab]);
    // 

    return (
        <Fragment>

        { !isUserLoaded || isUserLoading ? 
            <section className="">
                <Container className="text-center py-5">
                    <h2 className="">
                        <Spinner animation="border" role="status" variant="secondary" className="opacity-25" style={{ "height": "180px", "width": "180px" }}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </h2>
                </Container>
            </section>
        :
            user?.data?.user === null ?
            <EmptyState message={user?.errors[0].message} />
        :
            <ProcessDetails user={user} activeTab={activeTab} routeName={name}/>

        }
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user.user,
    isUserLoading: state.user.isUserLoading,
    isUserLoaded: state.user.isUserLoaded,
});


export default connect(mapStateToProps, { getUser })(Result);
