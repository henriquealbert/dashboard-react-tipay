import { Text } from '@chakra-ui/react';

export default function PageTitle({ children }) {
  return (
    <Text
      as="h1"
      color="gray.500"
      fontWeight="bold"
      lineHeight="39px"
      fontSize="40px"
      mb="14px"
      mr="22px"
    >
      {children}
    </Text>
  );
}
