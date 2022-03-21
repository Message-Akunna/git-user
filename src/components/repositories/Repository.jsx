import React from 'react';
// 
import ListGroup from 'react-bootstrap/ListGroup';


const Repository = () => {

    const repositoryLanguageLists = Array.from({ length: 4 }).map((_, idx) => (
        <span key={`${idx}repositoryLanguageListItem`} className="ms-0 me-3 small">
            <span className="badge border border-light rounded-circle p-1 repo-language-color" style={{"backgroundColor": "#e34c26"}}>
                <span className="visually-hidden">repo language color #e34c26</span>
            </span>         
            <span className="repo-programming-language ps-1">HTML</span>
        </span>
    ));

    return (
        <ListGroup.Item className='py-3'>
            <a href="http://" className='h5 text-decoration-none d-block'>HNG-Pre-internship-Task2</a>
            <p className='text-muted'>A web application that retrieves and displays users Github repositories and organisations.</p>
            <div className='d-flex justify-content-start flex-wrap'>
                {repositoryLanguageLists}
                <span className='repo-star me-3 small'> <i className='bi bi-star'></i> 2.4K</span>
                <span className='repo-fork me-3 small'> <i className='bi bi-diagram-2'></i> 3.4K</span>
                <span className='repo-time small'>Updated On November 30, 2020</span>
            </div>
        </ListGroup.Item>
    )
}

Repository.prototype = {

}

export default Repository
