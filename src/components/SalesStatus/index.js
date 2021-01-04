import { Box, Flex, Text } from '@chakra-ui/react';

export default function SalesStatus() {
  const aprovadas = 'R$ 1.400,00';
  const canceladas = 'R$ 440,00';
  const pendentes = 'R$ 600,00';

  return (
    <Box
      maxW="1008px"
      bg="white"
      boxShadow="0px 3px 10px #0000000A"
      borderRadius="10px"
      p="31px 35px"
      mt="45px"
    >
      <Flex justifyContent="space-between">
        <Text color="gray.500" fontSize="20px" lineHeight="24px">
          Aprovadas
        </Text>
        <Text
          mr="90px"
          color="gray.500"
          fontWeight="bold"
          fontSize="22px"
          lineHeight="27px"
        >
          {aprovadas}
        </Text>
      </Flex>
      <Box maxW="872px" h="1px" bg="#ECECEC" m="19.5px 48px 19.5px 18px" />
      <Flex justifyContent="space-between">
        <Text color="gray.500" fontSize="20px" lineHeight="24px">
          Canceladas
        </Text>
        <Text
          mr="90px"
          color="gray.500"
          fontWeight="bold"
          fontSize="22px"
          lineHeight="27px"
        >
          {canceladas}
        </Text>
      </Flex>
      <Box maxW="872px" h="1px" bg="#ECECEC" m="19.5px 48px 19.5px 18px" />
      <Flex justifyContent="space-between">
        <Text color="gray.500" fontSize="20px" lineHeight="24px">
          Pendentes
        </Text>
        <Text
          mr="90px"
          color="gray.500"
          fontWeight="bold"
          fontSize="22px"
          lineHeight="27px"
        >
          {pendentes}
        </Text>
      </Flex>
    </Box>
  );
}
