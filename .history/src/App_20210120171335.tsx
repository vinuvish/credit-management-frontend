import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import AppRouterRoutes from './AppRouterRoutes';
import { theme } from './app_utils/MuiTheme';


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
