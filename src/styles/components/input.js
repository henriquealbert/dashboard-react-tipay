const Input = {
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
};

export default Input;
