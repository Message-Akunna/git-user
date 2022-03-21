import React, { useState } from 'react';
// 
import { Link, useNavigate } from "react-router-dom";
// react components
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import Spinner from "react-bootstrap/Spinner"; 
import Container from "react-bootstrap/Container"; 


const Search = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [name, setName] = useState("");
    const [validated, setValidated] = useState(false);
    // 
    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setProcessing(true);
        const form = event.target
        const isValid = form.checkValidity() // returns true or false
        const formData = new FormData(form)
        const validationMessages = Array.from(formData.keys()).reduce((acc, key) => {
            acc[key] = form.elements[key].validationMessage
            return acc
            }, {});
        setErrors(validationMessages);
        if (isValid ){
            setValidated(true);
            setProcessing(false);
            navigate(`/${name}/repositories`);
        }else{
            setValidated(false);
            setProcessing(false);
            event.stopPropagation();
        }
    }

    const getError = (field) => errors[field];

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
                    <Form className="needs-validation" validated={validated} onSubmit={handleSubmit}>
                        <Row className='g-3'>
                            <Col className='flex-grow-1'>
                                <Form.Control size='lg' 
                                    type="search"
                                    name='name'
                                    placeholder="Enter git user name..."
                                    onChange={handleChange} 
                                    defaultValue={name}
                                    required />
                            </Col>
                            <Col className='flex-grow-0'>
                                <Button type="submit" className='' 
                                    size='lg' disabled={processing}
                                    variant='primary'>
                                    {processing? 
                                        <span className="text-light d-flex justify-content-center align-items-center">
                                            <Spinner as="span" size="sm"
                                                animation="border" variant="light"
                                                aria-hidden="true"  role="status" /> 
                                        </span>
                                    :
                                        <span>
                                            <i className='bi bi-search'></i>
                                        </span>
                                    }
                                </Button>
                            </Col>
                            <Col className='' xs={12}>
                                <Form.Control.Feedback type="invalid">
                                    {getError("name")}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </section>
    )
}

export default Search
