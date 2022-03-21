import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// react components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
// resources
import AppLogo from "../../assets/images/logo.png";
// components
import Search from '../search';
import User from '../user';

const Main = ({
    children, 
    ...props
}) => {
  return (
    <Fragment>
        <header className="py-3 mb-0 border-bottom">
            <Container className="d-flex flex-wrap justify-content-center">
                <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                    <Image className="" src={AppLogo} width="40" height="auto"/>
                    <span className="fs-4 ms-2">Git user</span>
                </Link>
                <h3 className="col-12 col-lg-auto mb-3 mb-lg-0">
                    <i className='bi-emoji-heart-eyes'></i>
                </h3>
            </Container>
        </header>
        <main className="">
            {/* search component */}
            <Search/>
            {children}
        </main>
    </Fragment>
  );
}

Main.propTypes = {

}

export default Main;