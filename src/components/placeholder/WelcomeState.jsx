import React, { Fragment } from 'react'
// 
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// 
import WaitingState from "../../assets/images/states/waiting.svg"

// empty state place holder
const WelcomeState = () => {
    return (
        <Fragment>
            <section className=''>
                <Container>
                    <div className='text-center py-5'>
                        <Image src={WaitingState} width="320" height="auto"/>
                        <h3 className='my-4'>Start by searching</h3>
                        <p className='text-muted'>Searching for any user on github have never been any better...</p>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default WelcomeState;