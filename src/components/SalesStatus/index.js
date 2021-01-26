import { Box, Flex, Text } from '@chakra-ui/react';

export default function SalesStatus() {
  const aprovadas = 'R$ 1.400,00';
  const canceladas = 'R$ 440,00';
  const pendentes = 'R$ 600,00';

  return (
    <Box
      w="100%"
      bg="white"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
      p="2rem 2.188rem"
      mb={{ base: '1.5rem', md: '0' }}
    >
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="1.5rem">
          Aprovadas
        </Text>
        <Text
          as="span"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.375rem"
          lineHeight="1.688rem"
        >
          {aprovadas}
        </Text>
      </Flex>
      <Box h="0.063rem" bg="#ECECEC" m="1rem" />
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="1.5rem">
          Canceladas
        </Text>
        <Text
          as="span"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.375rem"
          lineHeight="1.688rem"
        >
          {canceladas}
        </Text>
      </Flex>
      <Box h="0.063rem" bg="#ECECEC" m="1rem" />
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="1.5rem">
          Pendentes
        </Text>
        <Text
          as="span"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.375rem"
          lineHeight="1.688rem"
        >
          {pendentes}
        </Text>
      </Flex>
    </Box>
  );
}
