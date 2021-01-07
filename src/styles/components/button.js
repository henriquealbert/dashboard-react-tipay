const Button = {
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
    },
    outline: {
      border: '2px solid',
      borderColor: 'gray.800',
      borderRadius: '5px',
      color: 'gray.800',
      padding: '10px 20px',
      fontSize: '14px',
      lineHeight: '18px',
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
      fontSize: '20px',
      h: '60px',
      w: '195px',
      borderRadius: '5px',
      _hover: {
        bg: 'linear-gradient(180deg, #80D196 0%, #80D196 100%)',
        _disabled: {
          bg: 'linear-gradient(180deg, #80D196 0%, #80D196 100%)'
        }
      }
    }
  }
};

export default Button;
