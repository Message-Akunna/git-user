import React from 'react';
// 
import { Link } from "react-router-dom";
// react components
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import Container from "react-bootstrap/Container"; 


const Search = () => {
    return (
        <section className='search-section bg-light py-5 border-bottom'>
            <Container className=''>
                <div className=''>
                    <p className='mb-1 lead'>Welcome</p>
                    <h1 className=''>Search user </h1>
                    <p className='text-small text-muted'>
                        Search users <Link className='' to="/">repositories</Link> and  <Link className='' to="/">organizations</Link> on github...
                    </p>
                </div>
                <div className='p-4 bg-white rounded-3 border'>
                    <Form>
                        <Row className='g-3'>
                            <Col className='flex-grow-1'>
                                <Form.Control size='lg' 
                                    type="search"
                                    placeholder="User name or email" />
                            </Col>
                            <Col className='flex-grow-0'>
                                <Button className='' 
                                    size='lg' 
                                    variant='primary'>
                                    <i className='bi bi-search'></i>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </section>
    )
}

export default Search
