import { extendTheme } from '@chakra-ui/react';

import colors from './foundations/colors';
import fonts from './foundations/fonts';
// components
import Input from './components/input';
import Button from './components/button';

const customTheme = extendTheme({
  fonts: fonts,
  colors: colors,
  components: {
    Input: Input,
    Button: Button
  }
});

export default customTheme;
