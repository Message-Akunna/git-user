import React from 'react'
// 
import ListGroup from 'react-bootstrap/ListGroup';
// 
import Repository from './Repository';

const Repositories = () => {
    // 
    const repositoryList = Array.from({ length: 10 }).map((_, idx) => (
        <Repository key={`${idx}repositoryListItem`}/>
    ));
    // 
    return (
        <ListGroup variant="flush">
            {repositoryList}
        </ListGroup>
    )
}

export default Repositories
