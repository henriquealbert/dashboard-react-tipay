import React from 'react';
import { Router } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import customTheme from 'styles/customTheme';
import Routes from 'routes';
import history from './history';

const App = () => (
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    <Router history={history}>
      <Routes />
    </Router>
  </ChakraProvider>
);

export default App;
