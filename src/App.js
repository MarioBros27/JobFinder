
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#020811',
      main: '#020811',
      dark: '#020811',
      contrastText: '#fff',
    },
    secondary: {
      light: '#020811',
      main: '#020811',
      dark: '#020811',
      contrastText: '#000',
    },
  },
});
function App() {
  return (


    <ThemeProvider theme={theme}>

      <AppBar position="static">
        <Toolbar sx={{ paddingTop: 2 }} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          <Button color="inherit"><u>Menú</u></Button>
          <Link to="/jobs" style={{ color: "#fff" }}><Button color="inherit"><u>Trabajos</u></Button></Link>
          <Button color="inherit"><u>Perfil</u></Button>
          <Button color="inherit"><u>Preguntas Frecuentes</u></Button>
        </Toolbar>

      </AppBar>
     
      <Outlet />
    </ThemeProvider>

  );
}

export default App;
