import { createBreakpoints } from '@chakra-ui/theme-tools';

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '319px',
  md: '767px',
  lg: '959px',
  xl: '1199px',
  xxl: '1919px'
});

export default breakpoints;
