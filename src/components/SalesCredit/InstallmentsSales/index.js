import { Flex, Text } from '@chakra-ui/react';
import CustomBar from '../CustomBar';

export default function InstallmentsSales() {
  const data = [
    {
      id: '2x',
      value: 50
    },
    {
      id: '3x',
      value: 2
    },
    {
      id: '4x',
      value: 25
    },
    {
      id: '5x',
      value: 9
    },
    {
      id: '6x',
      value: 32
    },
    {
      id: '7x',
      value: 26
    },
    {
      id: '8x',
      value: 88
    },
    {
      id: '9x',
      value: 2
    },
    {
      id: '10x',
      value: 0
    },
    {
      id: '11x',
      value: 0
    },
    {
      id: '12x',
      value: 14
    }
  ];
  return (
    <Flex
      ml={{ md: '48px' }}
      mt={{ base: '2rem', md: '' }}
      direction="column"
      w="100%"
    >
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        color="gray.500"
        mb="0.875rem"
        ml={{ base: '2rem', md: '0' }}
      >
        Vendas Parceladas
      </Text>
      <Flex height="190px" w="100%" maxW="650px">
        <CustomBar data={data} color="#36A2EB" />
      </Flex>
    </Flex>
  );
}
