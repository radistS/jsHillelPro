import React from "react";
import TodoApp from "./Todo";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007FFF",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TodoApp />
      </ThemeProvider>
  );
}

export default App;
