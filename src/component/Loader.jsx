import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
      <div className='col-4 mx-auto mt-5'>
        <Spinner animation='grow' variant='dark' />
        <br />
        Loading Todos...
      </div>
    );
}

export default Loader
