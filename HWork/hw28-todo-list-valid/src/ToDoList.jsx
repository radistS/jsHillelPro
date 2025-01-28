import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const validationSchema = Yup.object({
    title: Yup.string()
    .min(5, 'Length more than 5 chars')
    .required('Title mandatory'),
    description: Yup.string()
    .required('Description mandatory')
  });

  return (
      <div style={{ padding: 20 }}>
        <h1>To-Do List</h1>
        <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTasks([...tasks, { ...values, completed: false }]);
              resetForm();
              setSubmitting(false);
            }}
        >
          {({ values, handleChange, handleBlur }) => (
              <Form>
                <Field as={TextField} name="title" label="Task Title" fullWidth margin="normal" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                <ErrorMessage name="title" component="div" />
                <Field as={TextField} name="description" label="Task Description" fullWidth margin="normal" onChange={handleChange} onBlur={handleBlur} value={values.description} />
                <ErrorMessage name="description" component="div" />
                <Button type="submit" variant="contained" color="primary">Add Task</Button>
              </Form>
          )}
        </Formik>
        <List>
          {tasks.map((task, index) => (
              <ListItem key={index} dense>
                <Checkbox checked={task.completed} onChange={() => {
                  const updatedTasks = tasks.map((t, idx) =>
                      idx === index ? { ...t, completed: !t.completed } : t
                  );
                  setTasks(updatedTasks);
                }} />
                <ListItemText primary={'Title: ' + task.title} secondary={'Description: ' + task.description} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
                <Button variant="contained" color="secondary" onClick={() => {
                  const remainingTasks = tasks.filter((_, idx) => idx !== index);
                  setTasks(remainingTasks);
                }}>Delete</Button>
              </ListItem>
          ))}
        </List>
      </div>
  );
}

export default ToDoList;
