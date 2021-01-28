import { extendTheme } from '@chakra-ui/react';

// foundations
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import breakpoints from './foundations/breakpoints';
// components
import Input from './components/input';
import Button from './components/button';
import Table from './components/table';
import Modal from './components/modal';
import Textarea from './components/textarea';
import Radio from './components/radio';
import Switch from './components/switch';
import Select from './components/select';

const customTheme = extendTheme({
  fonts: fonts,
  colors: colors,
  breakpoints: breakpoints,
  components: {
    Input: Input,
    Button: Button,
    Table: Table,
    Modal: Modal,
    Textarea: Textarea,
    Radio: Radio,
    Switch: Switch,
    Select: Select
  }
});

export default customTheme;
