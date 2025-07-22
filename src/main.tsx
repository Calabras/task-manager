import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { TaskProvider } from './context/TaskContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />               
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </TaskProvider>
  </React.StrictMode>
);
