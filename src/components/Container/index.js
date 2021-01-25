import { Box } from '@chakra-ui/react';

export default function Container({ children }) {
  return (
    <Box px={{ base: '2rem', md: '4.688rem' }} pt="3.75rem" w="100%" h="100%">
      {children}
    </Box>
  );
}
