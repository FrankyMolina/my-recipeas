import { theme } from '@chakra-ui/core';

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
    mono: '"Poppins", sans-serif',
  },
  colors: {
    ...theme.colors,
    brand: {
      red: '#e63946',
      lightLightBlue: '#f1faee',
      lightBlue: '#a8dadc',
      blue: '#457b9d',
      darkBlue: '#1d3557'
    },
  },
};

export default customTheme;