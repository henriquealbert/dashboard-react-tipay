const Input = {
  sizes: {
    lg: {
      field: {
        h: '3.75rem'
      }
    }
  },
  variants: {
    filled: {
      field: {
        bg: '#FFFFFF',
        fontSize: '1.25rem',
        borderRadius: '0.625rem',
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
        borderRadius: '0.313rem',
        h: '4.5rem',
        maxW: '43.438rem',
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
