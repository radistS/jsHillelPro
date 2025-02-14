import React, { useState } from "react";
import {
  Container,
  TextField,
  Checkbox,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import { Delete, Search } from "@mui/icons-material";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, checked: false }]);
      setNewTodo("");
    }
  };

  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  const handleDelete = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  const completedCount = todos.filter((todo) => todo.checked).length;
  const pendingCount = todos.length - completedCount;

  const filteredTodos = todos.filter((todo) =>
      search.length < 3 ? true : todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <Container maxWidth={false} sx={{ width: "100vw", height: "100vh", mt: 4, p: 2, borderRadius: 2,
        display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ width: "100%", textAlign: "center" }}>
          Java developer roadmap: 2025
        </Typography>
        <TextField
            fullWidth
            placeholder="Add new topic ..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            sx={{ mt: 2, mb: 2, width: "100%" }}
        />
        <Typography variant="h6" fontWeight="bold" sx={{ width: "100%" }}>
          Topics
        </Typography>
        <Paper sx={{ width: "100%" }}>
          <List>
            {filteredTodos.map((todo, index) => (
                <ListItem key={index} button onClick={() => handleToggle(index)}>
                  <ListItemIcon>
                    <Checkbox checked={todo.checked} />
                  </ListItemIcon>
                  <ListItemText
                      primary={todo.text}
                      sx={todo.checked ? { color: "green", fontWeight: "bold" } : {}}
                  />
                </ListItem>
            ))}
          </List>
        </Paper>
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2} sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="body1" sx={{ p: 1, borderRadius: 1, bgcolor: "blue", color: "white" }}>
              Total: {todos.length}
            </Typography>
            <Typography variant="body1" sx={{ p: 1, borderRadius: 1, bgcolor: "green", color: "white" }}>
              Completed: {completedCount}
            </Typography>
            <Typography variant="body1" sx={{ p: 1, borderRadius: 1, bgcolor: "red", color: "white" }}>
              Pending: {pendingCount}
            </Typography>
          </Box>
          <Button variant="contained" color="primary" startIcon={<Delete />} onClick={handleDelete}>
            DELETE
          </Button>
        </Box>
        <Box mt={2} display="flex" alignItems="center" sx={{ width: "100%" }}>
          <TextField
              fullWidth
              placeholder="Search (min length 3 char)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton>
            <Search />
          </IconButton>
        </Box>
      </Container>
  );
};

export default TodoApp;
