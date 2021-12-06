import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#5e35b1',
    // },
    // secondary: {
    //   main: '#FA960E',
    //   secondary: '#F6C64E',
    // },
    custom: {
      main: '#f5f5f5',
      purple: '#6E3ED4',
      orange: '#FF7339',
      yellow: '#ffc400',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  transition: {
    easing: {
      easeIn: 'cubic-bezier(0.6, -0.05, 0.1, 0.99)',
    },
  },
  typography: {
    h3: {
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: '25px',
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: '16px',
    },
  },
});

// export const theme = createTheme();
