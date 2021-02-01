import React, { useEffect } from 'react';
import Routes from 'routes';

// styles
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import customTheme from 'styles/customTheme';
import { GlobalStyles } from 'styles/global';

// react-query - data fetching
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import api from 'api';

// auth
import { useAuth } from 'hooks/useAuth';
import Cookies from 'js-cookie';

const queryClient = new QueryClient();

export default function App() {
  const { setAuthenticated, setLoading, handleUnauthorized } = useAuth();

  useEffect(() => {
    // redirect if status code is 401
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

    // get token from cookies & set authenticated
    const token = Cookies.get('tipay_token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setLoading(false);
    }
    if (!token) {
      setAuthenticated(false);
      setLoading(false);
    }
  }, [setLoading, setAuthenticated, handleUnauthorized]);

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
