import { Text } from '@chakra-ui/react';

export default function PageTitle({ children }) {
  return (
    <Text
      as="h1"
      color="gray.500"
      fontWeight="bold"
      lineHeight="2.438rem"
      fontSize="2.5rem"
      mb="0.875rem"
      mr="1.375rem"
    >
      {children}
    </Text>
  );
}
