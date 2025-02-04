import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos
} from './store';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      dispatch(addTodo(title, description));
      setTitle('');
      setDescription('');
    }
  };

  const handleEdit = (id, currentTitle, currentDescription) => {
    setEditId(id);
    setEditTitle(currentTitle);
    setEditDescription(currentDescription);
  };

  const handleSaveEdit = () => {
    if (editTitle.trim() !== '' && editDescription.trim() !== '') {
      dispatch(editTodo(editId, editTitle, editDescription));
      setEditId(null);
      setEditTitle('');
      setEditDescription('');
    }
  };

  return (
      <div style={{ padding: '20px' }}>
        <h1>Todo List</h1>
        <div style={{ marginBottom: '10px' }}>
          <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Введите заголовок задачи"
              style={{ marginRight: '5px' }}
          />
          <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Введите описание задачи"
              style={{ marginRight: '5px' }}
          />
          <button onClick={handleAdd}>Добавить задачу</button>
          <button onClick={() => dispatch(clearTodos())} style={{ marginLeft: '5px' }}>
            Очистить список
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
              <li key={todo.id} style={{
                marginBottom: '8px',
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>
                {editId === todo.id ? (
                    <>
                      <input
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          style={{ marginRight: '5px' }}
                      />
                      <input
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          style={{ marginRight: '5px' }}
                      />
                      <button onClick={handleSaveEdit}>Сохранить</button>
                    </>
                ) : (
                    <>
                <span
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                >
                  <strong>{todo.title}</strong>: {todo.description}
                </span>
                      <button onClick={() => handleEdit(todo.id, todo.title, todo.description)}>
                        Редактировать
                      </button>
                      <button onClick={() => dispatch(removeTodo(todo.id))} style={{ marginLeft: '5px' }}>
                        Удалить
                      </button>
                    </>
                )}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoApp;
