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
      p="31px 2.188rem"
    >
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="1.5rem">
          Aprovadas
        </Text>
        <Text
          as="span"
          mr="90px"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.375rem"
          lineHeight="1.688rem"
        >
          {aprovadas}
        </Text>
      </Flex>
      <Box
        h="0.063rem"
        bg="#ECECEC"
        m="19.0.313rem 48px 19.0.313rem 1.125rem"
      />
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="1.5rem">
          Canceladas
        </Text>
        <Text
          as="span"
          mr="90px"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.375rem"
          lineHeight="1.688rem"
        >
          {canceladas}
        </Text>
      </Flex>
      <Box
        h="0.063rem"
        bg="#ECECEC"
        m="19.0.313rem 48px 19.0.313rem 1.125rem"
      />
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="1.5rem">
          Pendentes
        </Text>
        <Text
          as="span"
          mr="90px"
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
