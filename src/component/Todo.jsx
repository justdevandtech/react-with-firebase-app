import React from 'react'
import { Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Loader from './Loader';
import './todo.css';
import { EditTodoModal } from './EditTodosModal';
import db from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";


const Todo = ({todos}) => {
    const [isChecked, setIsChecked] = React.useState(false);
     const [modalShow, setModalShow] = React.useState(false);
     const [todoId, setTodoId] = React.useState('');
    
    
    const isCompletedTask = (todo) => {
       /*  setIsChecked(todo); */
    }

    const handleDeleteTodo = async (id) => {
        const docRef = doc(db, "react-todos", id);
        await deleteDoc(docRef);
        console.log("Deleted " + id);
    };

    const handleShowEditTodoModal = () => {
        setModalShow(true);
    }

    const handleClose = () => setModalShow(false);

     if (todos.length === 0) {
      return (
        <span>
            There's no todos yet. Add one!
        </span>
      );
    } 
    
    return (
      <>
      {todos.map((todo, index) =>{
          return (
            <div
              key={index}
              className='bg-white todobox col-lg-4 mx-auto mt-2 p-3 mt-3 rounded d-flex align-items-center justify-content-between'
            >
              <Button variant='' className='mr-3'>
                <input
                  type='checkbox'
                  onClick={() => isCompletedTask(todo.id)}
                />
              </Button>
              <span
                className='bg-white ms-4 w-100'
                /* style={{ textDecoration: isChecked && "line-through" }} */
              >
                {todo.Name}
              </span>
              <Button
                variant=''
                className='border-0 d-none iconsBtn'
                style={{ float: "right", color: "red", display: "flex" }}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <BsTrash />
              </Button>
              <Button
                variant=''
                className='border-0 d-none iconsBtn'
                style={{ float: "right", color: "seagreen", display: "flex" }}
                onClick={() => {
                  setTodoId(todo.id);
                  handleShowEditTodoModal();
                }}
              >
                <FaEdit />
              </Button>
              <EditTodoModal
                modalShow={modalShow}
                handleClose={handleClose} // handleClose modal function
                todoId={todoId} //todo id to be edited
              />
            </div>
          );
      })}
      </>
    );
}

export default Todo
