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
        fontSize: '1.25rem',
        borderRadius: '10px',
        _focus: {
          bg: '#FFFFFF'
        },
        _placeholder: {
          color: 'gray.500'
        }
      }
    },
    innerSolid: {
      field: {
        bg: '#F2F2F2',
        fontSize: '1.25rem',
        borderRadius: '5px',
        h: '72px',
        maxW: '695px',
        _focus: {
          bg: '#F2F2F2'
        },
        _placeholder: {
          color: '#D9D9D9'
        }
      }
    }
  }
};

export default Input;
