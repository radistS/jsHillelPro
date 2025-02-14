import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now(), // унікальний ідентифікатор завдання
        text: task,
        completed: false, // спочатку завдання не виконане
      };
      setTodos([...todos, newTask]);
      setTask('');
    }
  };

  const handleToggleTask = (id) => {
    const updatedTodos = todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
      <Box>
        <TextField
            label="Нове завдання"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleAddTask}>
          Додати
        </Button>
        <List>
          {todos.map((item) => (
              <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
              >
                <Checkbox
                    checked={item.completed}
                    onChange={() => handleToggleTask(item.id)}
                />
                <ListItemText
                    primary={item.text}
                    sx={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                />
              </ListItem>
          ))}
        </List>
      </Box>
  );
}

export default Todo;
