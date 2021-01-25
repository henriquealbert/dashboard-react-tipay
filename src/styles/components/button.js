const Button = {
  variants: {
    secondary: {
      bg: 'linear-gradient(180deg, #E6B864 0%, #F2D6A3 100%)',
      color: 'white',
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      h: '5rem',
      w: '16.563rem',
      borderRadius: '0.625rem',
      boxShadow: '0rem 0.188rem 0.375rem #00000029',
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
      fontSize: '1.25rem',
      h: '5rem',
      w: '16.563rem',
      borderRadius: '0.625rem',
      boxShadow: '0rem 0.188rem 0.375rem #00000029',
      _hover: {
        bg: 'linear-gradient(180deg, #4EE2DE 0%, #4EE2DE 100%)',
        _disabled: {
          bg: 'linear-gradient(180deg, #4EE2DE 0%, #4EE2DE 100%)'
        }
      }
    },
    outline: {
      border: '0.125rem solid',
      borderColor: 'gray.800',
      borderRadius: '0.313rem',
      color: 'gray.800',
      padding: '0.625rem 1.25rem',
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      fontWeight: 'semibold',
      _hover: {
        color: 'white',
        bg: 'linear-gradient(180deg, #0A172D 0%, #40474F 100%)',
        borderColor: 'transparent'
      },
      _active: {
        color: 'white',
        bg: 'linear-gradient(180deg, #0A172D 0%, #40474F 100%)',
        borderColor: 'transparent'
      },
      _disabled: {
        color: 'gray.800',
        borderColor: 'gray.800'
      }
    },
    green: {
      bg: 'linear-gradient(180deg, #80D196 0%, #00B819 100%)',
      color: 'white',
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      h: '3.75rem',
      w: '12.188rem',
      borderRadius: '0.313rem',
      _hover: {
        bg: 'linear-gradient(180deg, #80D196 0%, #80D196 100%)',
        _disabled: {
          bg: 'linear-gradient(180deg, #80D196 0%, #80D196 100%)'
        }
      }
    },
    red: {
      bg: 'linear-gradient(180deg, #E66464 0%, #CE0000 100%)',
      color: 'white',
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      h: '4.063rem',
      w: '15.938rem',
      borderRadius: '0.313rem',
      _hover: {
        bg: 'linear-gradient(180deg, #E66464 0%, #E66464 100%)',
        _disabled: {
          bg: 'linear-gradient(180deg, #E66464 0%, #E66464 100%)'
        }
      }
    },
    black: {
      bg: 'linear-gradient(180deg, #0A172D 0%, #40474F 100%)',
      color: 'white',
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      h: '4.063rem',
      w: '10.75rem',
      borderRadius: '0.313rem',
      _hover: {
        bg: 'linear-gradient(180deg, #40474F 0%, #40474F 100%)',
        _disabled: {
          bg: 'linear-gradient(180deg, #40474F 0%, #40474F 100%)'
        }
      }
    },
    'calendar-sales-btn': {
      bg: 'linear-gradient(180deg, #0A172D 0%, #40474F 100%)',
      _hover: {
        bg: 'linear-gradient(180deg, #40474F 0%, #40474F 100%)'
      },
      boxShadow: '0rem 0.188rem 0.375rem #00000017',
      border: '0.125rem solid',
      borderColor: 'white',
      borderRadius: '0.375rem',
      color: 'white',
      fontSize: '0.875rem',
      fontWeight: 'normal'
    },
    'calendar-receivables-btn': {
      bg: 'linear-gradient(180deg, #dbad58 0%, #FDCB6E 100%)',
      _hover: {
        bg: 'linear-gradient(180deg, #FDCB6E 0%, #FDCB6E 100%)'
      },
      boxShadow: '0rem 0.188rem 0.375rem #00000017',
      border: '0.125rem solid',
      borderColor: 'white',
      borderRadius: '0.375rem',
      color: 'white',
      fontSize: '0.875rem',
      fontWeight: 'normal'
    }
  }
};

export default Button;
