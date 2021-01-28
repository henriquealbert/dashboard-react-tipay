import React, { useEffect } from 'react';
import Routes from 'routes';

// styles
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import customTheme from 'styles/customTheme';
import { GlobalStyles } from 'styles/global';

// react-query - data fetching
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import api from 'api';

// auth
import { useAuth } from 'hooks/useAuth';

const queryClient = new QueryClient();

export default function App() {
  const { handleUnauthorized } = useAuth();

  useEffect(() => {
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          handleUnauthorized();
        }
        return error;
      }
    );
  }, [handleUnauthorized]);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Global styles={GlobalStyles} />

        <Routes />

        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
