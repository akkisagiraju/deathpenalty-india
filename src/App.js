import * as React from 'react';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { DataProvider } from './context/Context';

const App = () => {
  // const prefersDarkMode = useMediaQuery<string>('(prefers-color-scheme: dark)');

  let theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'light',
          primary: {
            main: '#423643'
          },
          secondary: {
            main: '#FF8743'
          },
          background: {
            default: '#F5F5FA'
          }
        },
        typography: {
          fontSize: 18,
          button: {
            textTransform: 'none'
          }
        }
      }),
    []
  );

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <DataProvider>
          <Routes />
        </DataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
