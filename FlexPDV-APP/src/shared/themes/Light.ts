import { createTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: green[800],
      dark: green[900],
      light: green[600],
      contrastText: '#whitesmoke',
    },
    secondary: {
      main: orange[800],
      dark: orange[900],
      light:orange[600],
      contrastText: '#whitesmoke',
    },
    background: { 
      default: '#DFF0F2',
      paper: '#26323C',
    }
  }
});