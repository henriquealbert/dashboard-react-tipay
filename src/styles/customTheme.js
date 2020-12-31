import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    heading: `Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  colors: {
    black: '#0A172D',
    white: '#FFFFFF',
    gray: {
      200: '#F3F3F3',
      300: '#00000029',
      400: '#000078',
      500: '#606060',
      600: '#40474F'
    },
    brand: {
      primary: '#4EE2DE',
      primaryDarker: '#60C4B9',
      secondary: '#F2D6A3',
      secondaryDarker: '#E6B864'
    }
  },

  components: {
    Input: {
      sizes: {
        lg: {
          field: {
            h: '60px'
          }
        }
      },
      variants: {
        filled: {
          field: {
            bg: '#FFFFFF',
            fontSize: '20px',
            borderRadius: '10px',
            _focus: {
              bg: '#FFFFFF'
            },
            _placeholder: {
              color: 'gray.500'
            }
          }
        }
      }
    },
    Button: {
      variants: {
        secondary: {
          bg: 'linear-gradient(180deg, #E6B864 0%, #F2D6A3 100%)',
          color: 'white',
          fontWeight: 'semibold',
          fontSize: '20px',
          h: '80px',
          w: '265px',
          borderRadius: '10px',
          boxShadow: '0px 3px 6px #00000029',
          _hover: {
            bg: 'linear-gradient(180deg, #F2D6A3 0%, #F2D6A3 100%)',
            _disabled: {
              bg: 'linear-gradient(180deg, #F2D6A3 0%, #F2D6A3 100%)'
            }
          }
        },
        primary: {
          bg: 'linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)',
          color: 'white',
          fontWeight: 'semibold',
          fontSize: '20px',
          h: '80px',
          w: '265px',
          borderRadius: '10px',
          boxShadow: '0px 3px 6px #00000029',
          _hover: {
            bg: 'linear-gradient(180deg, #4EE2DE 0%, #4EE2DE 100%)',
            _disabled: {
              bg: 'linear-gradient(180deg, #4EE2DE 0%, #4EE2DE 100%)'
            }
          }
        }
      }
    }
  }
});

export default customTheme;
