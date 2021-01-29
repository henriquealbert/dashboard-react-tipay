import React, { useEffect } from 'react';
import Routes from 'routes';

// styles
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import customTheme from 'styles/customTheme';
import { GlobalStyles } from 'styles/global';

// react-query - data fetching
import { QueryClient, QueryClientProvider } from 'react-query';
import api from 'api';

// auth
import { useAuth } from 'hooks/useAuth';
import Cookies from 'js-cookie';

const queryClient = new QueryClient();

export default function App() {
  const { setAuthenticated, setLoading } = useAuth();

  useEffect(() => {
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
  }, [setLoading, setAuthenticated]);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Global styles={GlobalStyles} />

        <Routes />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
