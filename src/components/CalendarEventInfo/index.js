import { Box, Text } from '@chakra-ui/react';

export default function CalendarEventInfo() {
  return (
    <Box
      flexGrow="1"
      maxW="50%"
      maxH="750px"
      bg="white"
      boxShadow="0px 3px 10px #0000000A"
      ml="42px"
      mt="118px"
      p="22px 26px"
      borderRadius="10px"
    >
      <Text color="gray.700" fontSize="16px" fontWeight="semibold" mb="18px">
        Detalhes 25/11/2020
      </Text>
      <Box borderRadius="5px" bg="brand.300" maxH="225px" p="30px">
        <Text
          fontSize="18px"
          color="white"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Vendas
        </Text>
      </Box>
      <Box mt="22px" borderRadius="5px" bg="brand.400" maxH="225px" p="30px">
        <Text
          fontSize="18px"
          color="white"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Recebíveis
        </Text>
      </Box>
    </Box>
  );
}
