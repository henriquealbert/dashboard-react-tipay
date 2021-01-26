import { Box } from '@chakra-ui/react';

export default function Container({ children }) {
  return (
    <Box
      px={{ base: '1rem', lg: '3rem', xl: '4.688rem' }}
      pt="3.75rem"
      pb={{ base: '12vh', lg: '0' }}
      w="100%"
      h="100%"
    >
      {children}
    </Box>
  );
}
