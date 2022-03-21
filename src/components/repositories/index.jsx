import React, { Fragment } from 'react';
import PropTypes from "prop-types";

// 
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
// 
import Repository from './Repository';
import EmptyStateImage from "../../assets/images/states/no_data.svg"

const Repositories = ({
    repositories,
    ...props
}) => {
    // 
    const repositoryList = repositories.map((item, index) => (
        <Repository key={`${index}repositoryListItem`} repositoryData={item?.node} />
    ));
    // 
    return (
        <Fragment>

            {!repositories.length ? 
            <div className='text-center py-5'>
                <Image src={EmptyStateImage} width="240" height="auto"/>
                <h5 className='my-4'>User has no public repository data...</h5>
            </div>
            :
            <ListGroup variant="flush">
                {repositoryList}
            </ListGroup>
            }
        </Fragment>
    )
}

Repositories.prototype = {
    repositories: PropTypes.array.isRequired
}
export default Repositories
