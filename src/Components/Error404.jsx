import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <Container fluid className=''>
      <Image fluid src='../images/error.jpg' className='' alt='error404' />
        <Link to='/'><Button size='lg' variant='danger'>Volver al Home</Button></Link>
    </Container>
  )
}

export default Error404;