import { Box } from '@chakra-ui/react';

export default function Container({ children }) {
  return (
    <Box px="75px" pt="60px" w="100%" h="100%">
      {children}
    </Box>
  );
}
