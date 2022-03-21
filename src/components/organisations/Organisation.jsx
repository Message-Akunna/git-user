import React from 'react'
import PropTypes from "prop-types";
// 
import Image from 'react-bootstrap/Image';
// 
import ListGroup from 'react-bootstrap/ListGroup';

const Organisation = ({
    organisationData,
    ...props
}) => {
    return (
        <ListGroup.Item className='py-3 d-flex justify-content-start align-items-center'>
            <div className='me-3'>
                <Image src={organisationData.avatarUrl} width="60" height="auto" rounded className='rounded-3 border'/>
            </div>
            <div className=''>
                <a href={organisationData.url} className='h5 text-decoration-none d-inline-block' target="_blank" rel="noreferrer">{organisationData.name}</a>
                <a href={`mailto:${organisationData.email}`} className='h6 text-decoration-none d-inline-block'>{organisationData.email}</a>
                <p className='text-muted mb-0'>{organisationData.description}</p>
            </div>
        </ListGroup.Item>
    )
}

Organisation.prototype = {
    organisationData: PropTypes.object.isRequired
}

export default Organisation
