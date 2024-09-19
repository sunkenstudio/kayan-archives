import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
// import { Montserrat, IBM_Plex_Serif } from 'next/font/google';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Import the weights and subsets, add any other config here as well
// const montserrat = Montserrat({
//   weight: ['400'],
//   subsets: ['latin'],
// });

// const ibmPlexSerif = IBM_Plex_Serif({
//   weight: ['400'],
//   subsets: ['latin'],
// });

export const breakpoints = {
  sm: '48em',
  md: '62em',
  lg: '80em',
  xl: '96em',
  '2xl': '128em',
};

export const colors = {
  light: '#fff',
  dark: '#1c1c1c',
  gray:'#f5f5f5',
  //'#1A202C'
};

// 3. extend the theme
const theme = extendTheme({
  breakpoints,
  config,
  colors,
  fonts: {
    body: `sans-serif`,
    heading: `sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: `sans-serif`,
      },
    },
  },
});

export default theme;
