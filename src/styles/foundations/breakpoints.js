import { createBreakpoints } from '@chakra-ui/theme-tools';

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '768px',
  lg: '960px',
  xl: '1200px',
  xxl: '1920px'
});

export default breakpoints;
