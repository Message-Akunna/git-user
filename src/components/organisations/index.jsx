import React from 'react';
// 
import ListGroup from 'react-bootstrap/ListGroup';
// 
import Organisation from './Organisation';

const Organisations = () => {

    // 
    const organisationList = Array.from({ length: 10 }).map((_, idx) => (
        <Organisation key={`${idx}organisationListItem`}/>
    ));

    return (
        <ListGroup variant="flush">
            {organisationList}
        </ListGroup>
    )
}

export default Organisations
