import { Box, Flex, Text } from '@chakra-ui/react';
import CustomBar from '../CustomBar';

export default function TotalCreditSales() {
  const parcelada = [
    {
      id: 'Parcelada',
      value: 25
    }
  ];
  const avista = [
    {
      id: 'À vista',
      value: 88
    }
  ];
  return (
    <Flex direction="column" borderRight={{ md: '0.063rem solid #ECECEC' }}>
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        color="gray.500"
        mb="0.875rem"
        ml={{ base: '2rem', md: '0' }}
      >
        Vendas no crédito
      </Text>
      <Flex ml={{ base: '1rem', md: '0' }}>
        <Box height="190px" w="80px" mr="2rem">
          <CustomBar data={avista} color="#FF6384" />
        </Box>
        <Box height="190px" w="80px">
          <CustomBar data={parcelada} color="#FF9F40" />
        </Box>
      </Flex>
    </Flex>
  );
}
