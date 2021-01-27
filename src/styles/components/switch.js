const Switch = {
  baseStyle: {
    track: {
      borderRadius: '1.375rem',
      _checked: {
        bg: 'linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)'
      }
    }
  },
  sizes: {
    lg: {
      track: { w: '4.5rem', h: '2.25rem' },
      thumb: {
        w: '2.25rem',
        h: '2.25rem',
        _checked: {
          transform: 'translateX(2.25rem)'
        }
      }
    }
  }
};

export default Switch;
