import React from 'react'
import { Form, Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";


const Todos = () => {
    const [input, setInput] = React.useState('');

    
    const addTodo = async (e) => {
          e.preventDefault();
          const payload = { Name: input };
          const collectionRef = collection(db, "react-todos");
          await addDoc(collectionRef, payload);
          setInput("");
    }
    return (
      <>
        <Form className='col-lg-4 mx-auto'>
          <Form.Group
            className='mb-3 mt-3'
            controlId='exampleForm.ControlInput1'
          >
            <Form.Control
              value={input}
              type='text'
              placeholder='Task...'
              onChange={e => setInput(e.target.value)}
            />
          </Form.Group>
          <Button className='px-3' variant='success' type='button' onClick={addTodo}>
            Add Task
          </Button>
        </Form>
      </>
    );
}

export default Todos
