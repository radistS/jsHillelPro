const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(config.port,
    () => console.log(`Server running on port ${config.port}`));

mongoose.connect(config.db.uri)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const Todo = mongoose.model('Todo', new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  completed: {type: Boolean, default: false}
}));

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  console.log('Sending all todos:', todos);
  res.send(todos);
});

app.post('/todos', async (req, res) => {
  console.log('Received data from frontend:', req.body);
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description
  });
  console.log('Todo to be saved:', todo);
  try {
    const savedTodo = await todo.save();
    console.log('Todo saved to database:', savedTodo);
    res.send(savedTodo);
  } catch (err) {
    console.log('Error saving todo:', err);
    res.status(400).send(err);
  }
});

app.put('/todos/:id', async (req, res) => {
  console.log('Update received for ID:', req.params.id, 'with data:', req.body);
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body,
        {new: true});
    console.log('Updated todo:', todo);
    res.send(todo);
  } catch (err) {
    console.log('Error updating todo:', err);
    res.status(400).send(err);
  }
});

app.delete('/todos/:id', async (req, res) => {
  console.log('Delete request for ID:', req.params.id);
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    console.log('Todo deleted:', result);
    res.send({message: 'Todo deleted'});
  } catch (err) {
    console.log('Error deleting todo:', err);
    res.status(400).send(err);
  }
});


