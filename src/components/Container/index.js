import { Box } from '@chakra-ui/react';

export default function Container({ children }) {
  return (
    <Box
      px={{ base: '1rem', lg: '2rem', xl: '2.5rem', xxl: '4.688rem' }}
      pt="3.75rem"
      pb={{ base: '15vh', lg: '0' }}
      w="100%"
      h="100%"
    >
      {children}
    </Box>
  );
}
