import React from 'react';
// 
import Card from "react-bootstrap/Card";


const User = () => {
    return (
        <Card className='border-0'>
            <Card.Header className='text-center bg-transparent border-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="auto" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            </Card.Header>
            <Card.Body className=''>
                <Card.Title>Message Akunna O.</Card.Title>
                <p className='text-muted'>Message-Akunna</p>
                <Card.Text>
                    I am a software developer with a voracious 
                    appetite for reading, building, learning 
                    new kinds of stuff every day.
                </Card.Text>
            </Card.Body>
      </Card>
    )
}

export default User
