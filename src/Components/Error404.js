import React from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Button } from 'react-bootstrap';


const Error404 = () => {
  return (
    <Container fluid className=''>
      <Image fluid src='../images/error.jpg' className='' alt='error404'></Image>
        <Button className='btn'/>
    </Container>
  )
}

export default Error404;