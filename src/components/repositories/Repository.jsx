import React from 'react';
import PropTypes from "prop-types";
// 
import ListGroup from 'react-bootstrap/ListGroup';


const Repository = ({
    repositoryData,
    ...props
}) => {

    const repositoryLanguageLists = repositoryData.languages.nodes.map((item, index) => (
        <span key={`${index}repositoryLanguageListItem`} className="ms-0 me-3 small">
            <span className="badge border border-light rounded-circle p-1 repo-language-color" style={{"backgroundColor": item.color}}>
                <span className="visually-hidden">repo language color {item.color}</span>
            </span>         
            <span className="repo-programming-language ps-1">{item.name}</span>
        </span>
    ));

    return (
        <ListGroup.Item className='py-3'>
            <a href={repositoryData.url} className='h5 text-decoration-none d-block' target="_blank" rel="noreferrer">{repositoryData.name}</a>
            <p className='text-muted'>{repositoryData.description}</p>
            <div className='d-flex justify-content-start flex-wrap'>
                {repositoryLanguageLists}
                <span className='repo-star me-3 small'> <i className='bi bi-star'></i> {repositoryData.stargazers.totalCount} </span>
                <span className='repo-fork me-3 small'> <i className='bi bi-diagram-2'></i> {repositoryData.forks.totalCount} </span>
                {/* <span className='repo-time small'>Updated On November 30, 2020</span> */}
            </div>
        </ListGroup.Item>
    )
}

Repository.prototype = {
    repositoryData: PropTypes.object.isRequired
}

export default Repository
