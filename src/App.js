import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';

import Routes from 'routes';
import customTheme from 'styles/customTheme';
import { AuthProvider } from 'context/AuthContext';
import { GlobalStyles } from 'styles/global';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Global styles={GlobalStyles} />
        <Routes />
      </ChakraProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
