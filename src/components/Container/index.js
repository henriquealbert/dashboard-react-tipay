import { Box } from '@chakra-ui/react';

export default function Container({ children }) {
  return (
    <Box
      px={{ base: '1rem', md: '1.25rem', xxl: '4.688rem' }}
      pt="3rem"
      pb={{ base: '15vh', lg: '0' }}
      w="100%"
      h="100%"
    >
      {children}
    </Box>
  );
}
