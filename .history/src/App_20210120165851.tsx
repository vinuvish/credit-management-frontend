import React from 'react';
import logo from './logo.svg';
import './App.css';
import { theme } from './app_utils/MuiTheme';

import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import AppRouterRoutes from './AppRouterRoutes';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <AppRouterRoutes></AppRouterRoutes>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
