import { Box } from '@chakra-ui/react';

export default function ErrorMessage({ message }) {
  return (
    <Box color="red.500" m="0 auto">
      {message}
    </Box>
  );
}
