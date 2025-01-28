import React, { useState } from "react";
import { Form, Field } from "react-final-form";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (values, form) => {
    if (values.todo.trim()) {
      setTodos([...todos, { id: Date.now(), text: values.todo, completed: false }]);
      form.reset();
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };

  return (
      <div >
        <h1 >TODO List with React Final Form</h1>
        <Form
            onSubmit={handleAddTodo}
            render={({ handleSubmit, form }) => (
                <form onSubmit={(event) => handleSubmit(event, form)}>
                  <Field name="todo">
                    {({ input, meta }) => (
                        <div className="flex-1">
                          <input {...input} type="text" placeholder="Enter new task..."/>
                          {meta.error && meta.touched && (<span >{meta.error}</span>)}
                        </div>
                    )}
                  </Field>
                  <button type="submit">Add</button>
                </form>
            )}
        />

        <ul >
          {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <div>
                  <button onClick={() => handleToggleComplete(todo.id)}>{todo.completed ? "Undo" : "Complete"}</button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default TodoApp;
