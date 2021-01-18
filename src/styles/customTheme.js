import { extendTheme } from '@chakra-ui/react';

import colors from './foundations/colors';
import fonts from './foundations/fonts';
// components
import Input from './components/input';
import Button from './components/button';
import Table from './components/table';
import Modal from './components/modal';
import Textarea from './components/textarea';
import Radio from './components/radio';

const customTheme = extendTheme({
  fonts: fonts,
  colors: colors,
  components: {
    Input: Input,
    Button: Button,
    Table: Table,
    Modal: Modal,
    Textarea: Textarea,
    Radio: Radio
  }
});

export default customTheme;
