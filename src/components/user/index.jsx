import React from 'react';
import PropTypes from 'prop-types';
// 
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';


const User = ({
    userDetails,
    ...props
}) => {
    return (
        <Card className='border-0'>
            <Card.Header className='text-center bg-transparent border-0 d-flex flex-md-column align-items-md-start justify-content-start align-items-center'>
                <Image src={`${userDetails.avatarUrl}s=300`} width="160" height="auto" roundedCircle thumbnail/>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <div className='text-start ms-3 ms-md-0'>
                    <h5 className='my-2'>{userDetails.name}</h5>
                    <p className='text-muted mb-0'>{userDetails.login}</p>
                </div>
            </Card.Header>
            <Card.Body className=''>
                <p className=''>
                    {userDetails.bio}
                </p>
                <hr className='d-none d-md-block border-bottom'/>
            </Card.Body>
      </Card>
    )
}

User.prototype = {
    userDetails: PropTypes.object.isRequired
}

export default User
