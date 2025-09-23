import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App.jsx';
import '@mantine/core/styles.css';

// Import your custom LanguageProvider
import { LanguageProvider } from './context/LanguageContext';

// 1. Create your custom theme
const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  primaryColor: 'green',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap your app with both providers */}
    <MantineProvider theme={theme}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MantineProvider>
  </React.StrictMode>,
);