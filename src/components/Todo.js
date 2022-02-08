import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodos }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodos(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <p onClick={() => removeTodo(todo.id)} className="delete-icon">
          x
        </p>
        <p onClick={() => setEdit({ id: todo.id, value: todo.text })} className="eddit-icon">
          e
        </p>
      </div>
    </div>
  ));
}

export default Todo;
