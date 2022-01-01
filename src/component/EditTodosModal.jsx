import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import db from "../firebase";
import { setDoc, doc } from "firebase/firestore";

function MyVerticallyCenteredModal(props) {
    const [input, setInput] = React.useState('');

  const addEdittedTodo = async () => {
        const docRef = doc(db, "react-todos", props.todoid);
       const payload = { Name: input };
       await setDoc(docRef, payload); 
       console.log("Edited " + props.todoid);
       props.onHide();
  };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className='mb-3 mt-3' controlId='exampleForm.ControlInput1'>
          <Form.Control
            value={input}
            type='text'
            placeholder='Task...'
            onChange={e => setInput(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addEdittedTodo}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const EditTodoModal = ({ modalShow, handleClose, todoId }) => {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={handleClose}
        todoid={todoId}
      />
    </>
  );
};

