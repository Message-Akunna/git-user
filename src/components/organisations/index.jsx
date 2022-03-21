import React, { Fragment } from 'react';
import PropTypes from "prop-types";
// 
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
// 
import Organisation from './Organisation';
import EmptyStateImage from "../../assets/images/states/no_data.svg"

const Organisations = ({
    organizations,
    ...props
}) => {

    // 
    const organisationList = organizations.map((item, index) => (
        <Organisation key={`${index}organisationListItem`} organisationData={item?.node} />
    ));

    return (
        <Fragment>
            {!organizations.length ? 
            <div className='text-center py-5'>
                <Image src={EmptyStateImage} width="240" height="auto"/>
                <h5 className='my-4'>User has no public organisation data...</h5>
            </div>
            :
            <ListGroup variant="flush">
                {organisationList}
            </ListGroup>
            }
        </Fragment>
    )
}


Organisations.prototype = {
    organizations: PropTypes.array.isRequired
}

export default Organisations
