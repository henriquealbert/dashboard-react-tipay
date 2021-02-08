import Routes from 'routes';

// styles
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import customTheme from 'styles/customTheme';
import { GlobalStyles } from 'styles/global';

// react-query - data fetching
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export default function App() {
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
