import * as React from 'react';
import {
  Button,
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const drawerWidth = 240;

const Drawer = () => {

  const { toggleTheme } = useTheme();

  return (
      <MUIDrawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary="Main"/>
          </ListItem>
          <ListItem button component={Link} to="/toDo">
            <ListItemIcon><AddTaskIcon/></ListItemIcon>
            <ListItemText primary="ToDo"/>
          </ListItem>
          <ListItem button component={Link} to="/contacts">
            <ListItemIcon><ContactsIcon/></ListItemIcon>
            <ListItemText primary="Contackt"/>
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText primary="About Me"/>
          </ListItem>
          <ListItem buttonc component={Link} onClick={toggleTheme}>
            <ListItemIcon><ToggleOffIcon/></ListItemIcon>
            <ListItemText primary="Change  style"/>
          </ListItem>
        </List>

      </MUIDrawer>
  );
}

export default Drawer;
