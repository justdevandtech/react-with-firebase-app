import React, { useEffect, useState } from "react";
import Todo from "./component/Todo";
import Todos from "./component/Todos";
import "./App.css";
import db from "././firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Loader from "./component/Loader";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(todos);
  useEffect(() => {
    onSnapshot(collection(db, "react-todos"), snapshot => {
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTodos(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='mt-5 container'>
      <h1 className='text-center'>What's Up Today?</h1>
      <Todos />
      <div style={{marginTop: "80px"}}>
        <Todo todos={todos} />
      </div>
    </div>
  );
}

export default App;
