import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';
import customTheme from 'styles/customTheme';
import { AuthProvider } from 'context/AuthContext';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Routes />
      </ChakraProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
