'use client';
import { Montserrat } from "next/font/google";
import { createTheme } from '@mui/material/styles';

const montserrat = Montserrat
({ weight: '400',
subsets: ['latin'],
display: 'swap',});

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
    
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 820,
      lg: 1250,
      xl: 1500,
    },
  },
});

export default theme;