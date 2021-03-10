import { Flex, Text } from '@chakra-ui/react';
import CustomBar from '../CustomBar';

export default function InstallmentsSales({ data }) {
  return (
    <Flex
      pl={{ lg: '1rem', xl: '3rem' }}
      mt={{ base: '2rem', md: 'auto' }}
      direction="column"
      w="100%"
    >
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        color="gray.500"
        mb="0.875rem"
        ml={{ base: '2rem', md: '1rem', xl: '0' }}
      >
        Vendas Parceladas
      </Text>
      <Flex height="190px" w="100%">
        <CustomBar data={data} color="#36A2EB" />
      </Flex>
    </Flex>
  );
}
