import { createTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette:{
    primary: {
      main: orange[700],
      dark: orange[800],
      light: orange[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: green[700],
      dark: green[800],
      light:green[500],
      contrastText: '#ffffff',
    },
    background: { 
      default: '#E7F9FD',
      paper: '#ffffff',
    }
  }
});