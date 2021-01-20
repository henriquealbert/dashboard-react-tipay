import { Box } from '@chakra-ui/react';

export default function Container({ children }) {
  return (
    <Box px="4.688rem" pt="3.75rem" w="100%" h="100%">
      {children}
    </Box>
  );
}
