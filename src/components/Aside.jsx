import React, { useState } from 'react';
import { Button, OffcanvasBody, Offcanvas, OffcanvasHeader } from 'reactstrap';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div className='bg-yellow-200'>
      <Button
        color="primary"
        onClick={toggle}
      >
        Open
      </Button>
      <Offcanvas
    
        isOpen={isOpen}
        toggle={toggle}
      >
        <OffcanvasHeader toggle={toggle} >
          Offcanvas
        </OffcanvasHeader>
        <OffcanvasBody className='bg-blue-500'>
          <strong>
            This is the Offcanvas body.
          </strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
   


    </>
    
  );
}

export default Aside;
