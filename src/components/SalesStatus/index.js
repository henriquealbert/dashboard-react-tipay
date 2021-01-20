import { Box, Flex, Text } from '@chakra-ui/react';

export default function SalesStatus() {
  const aprovadas = 'R$ 1.400,00';
  const canceladas = 'R$ 440,00';
  const pendentes = 'R$ 600,00';

  return (
    <Box
      w="100%"
      bg="white"
      boxShadow="0rem 0.188rem 10px #0000000A"
      borderRadius="10px"
      p="31px 35px"
    >
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="24px">
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
      <Box h="1px" bg="#ECECEC" m="19.5px 48px 19.5px 1.125rem" />
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="24px">
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
      <Box h="1px" bg="#ECECEC" m="19.5px 48px 19.5px 1.125rem" />
      <Flex justifyContent="space-between">
        <Text as="h4" color="gray.500" fontSize="1.25rem" lineHeight="24px">
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
