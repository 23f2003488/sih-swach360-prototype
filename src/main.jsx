import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App.jsx';
import '@mantine/core/styles.css';

// 1. Create your custom theme
const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  primaryColor: 'green', // Changes the main color of buttons, links, etc.
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Pass the theme to the provider */}
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);