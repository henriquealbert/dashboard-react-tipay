const Radio = {
  sizes: {
    lg: {
      control: { w: '2.75rem', h: '2.75rem' },
      label: {
        fontSize: '1.25rem',
        color: 'gray.1000'
      }
    }
  },
  baseStyle: {
    control: {
      border: '0.625rem solid',
      borderColor: '#F1F1F1',
      bg: '#F1F1F1',
      _checked: {
        bg: 'linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)',
        borderColor: '#F1F1F1',
        color: '#4EE2DE',
        _before: {
          bg: 'linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)'
        },
        _hover: {
          borderColor: '#F1F1F1',
          bg: 'linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)'
        }
      },
      _focus: {
        boxShadow: '0 0 0 0.188rem #4EE2DE'
      }
    }
  }
};

export default Radio;
