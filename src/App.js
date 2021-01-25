import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

// styles
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import customTheme from 'styles/customTheme';
import { GlobalStyles } from 'styles/global';

// react-query - data fetching
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

// auth
import { AuthProvider } from 'hooks/useAuth';

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider theme={customTheme}>
          <CSSReset />
          <Global styles={GlobalStyles} />

          <Routes />

          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
