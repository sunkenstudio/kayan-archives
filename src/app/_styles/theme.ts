import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
}

export const colors = {
  light: '#e6f2ee',
  light1: '#fff',
  dark: '#1c1c1c',
  gray: '#f5f5f5',
  green1: '#5a612e',
  green2: '#0e492d',
  green3: '#e6f2ee',
  green4: '#83a99c',
  blue1: '#556f93',
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
