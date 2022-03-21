import React from 'react';
// 
import Card from "react-bootstrap/Card";


const User = () => {
    return (
        <Card className='border-0'>
            <Card.Header className='text-center bg-transparent border-0 d-flex flex-md-column align-items-md-start justify-content-start align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ "width": "160", "height": "auto" }} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>a
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <div className='text-start ms-3 ms-md-0'>
                    <h5 className='my-2'>Message Akunna O.</h5>
                    <p className='text-muted mb-0'>Message-Akunna</p>
                </div>
            </Card.Header>
            <Card.Body className=''>
                <p className=''>
                    I am a software developer with a voracious 
                    appetite for reading, building, learning 
                    new kinds of stuff every day.
                </p>
                <hr className='d-none d-md-block border-bottom'/>
            </Card.Body>
      </Card>
    )
}

export default User
