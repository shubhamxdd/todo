import { useState } from "react";
import "./App.css";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDesc("");
  };
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className="heading">Todo App</h1>
      <div className="form">
        <div className="title">
          <div className="label">
            <label htmlFor="title" className="label">
              Title
            </label>
          </div>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="desc">
          <div className="label">
            <label htmlFor="desc" className="label">
              Description
            </label>
          </div>
          <input
            id="desc"
            type="text"
            placeholder="Enter desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="btn">
          <button onClick={addTodo}>Add Todo</button>
        </div>
      </div>

      <div className="list">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <p className="f-title">{todo.title}</p>
              <p className="f-desc">{todo.desc}</p>
              <button onClick={() => removeTodo(index)} className="center">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
