import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import AppRouterRoutes from './AppRouterRoutes';
import { theme } from './app_utils/MuiTheme';
import { useAppStore } from './models_stores/appStore';


function App() {
  const streamApplication = useAppStore((state) => state.streamApplication);
  React.useEffect(() => {
    streamApplication(0)


  }, []); // eslint-disable-line


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
