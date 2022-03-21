import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
// 
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// 
import ErrorStateImage from "../../assets/images/states/error.svg"

// empty state place holder
const WrongRouteState = () => {
    const [currentPath, setCurrentPath] = useState("")
    // 
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location]);

    const handleNavigate = () => {
        navigate(-1);
    }

    return (
        <Fragment>
            <section className=''>
                <Container>
                    <div className='text-center py-5'>
                        <Image src={ErrorStateImage} width="320" height="auto"/>
                        <h3 className='my-4'>Sorry!!! This page does not exist...</h3>
                        <div className='text-center'>
                            <Button variant='outline-primary' size="lg" 
                                onClick={handleNavigate}
                                className={`text-decoration-none me-2 ${currentPath === "/"? "d-none" : ""}`}> 
                                <i className='bi bi-arrow-left-short'></i> Go Back
                            </Button>
                            <Button as={Link} to="/" variant='outline-secondary' size="lg" className='ms-3 text-decoration-none'> 
                                <i className='bi bi-house-door'></i> Home
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default WrongRouteState;