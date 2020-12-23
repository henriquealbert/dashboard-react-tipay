import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Test from 'components/Test';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <h1>Dashboard</h1>
      <Test />
    </ChakraProvider>
  );
};

export default App;
