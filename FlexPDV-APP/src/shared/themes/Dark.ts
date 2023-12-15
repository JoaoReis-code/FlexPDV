import { createTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: green[700],
      dark: green[800],
      light: green[600],
      contrastText: '#whitesmoke',
    },
    secondary: {
      main: orange[700],
      dark: orange[800],
      light:orange[600],
      contrastText: '#whitesmoke',
    },
    background: { 
      default: '#394A59',
      paper: '#272B33',
    },
  },
  typography:{
    allVariants:{
      color: 'whitesmoke'
    }
  }
});