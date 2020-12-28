import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import customTheme from 'styles/customTheme';
import Routes from 'routes';

const App = () => (
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    <Routes />
  </ChakraProvider>
);

export default App;
