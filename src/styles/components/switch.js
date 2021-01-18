const Switch = {
  baseStyle: {
    track: {
      borderRadius: '22px',
      _checked: {
        bg: 'linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)'
      }
    }
  },
  sizes: {
    lg: {
      track: { w: '72px', h: '36px' },
      thumb: {
        w: '36px',
        h: '36px',
        _checked: {
          transform: 'translateX(36px)'
        }
      }
    }
  }
};

export default Switch;
