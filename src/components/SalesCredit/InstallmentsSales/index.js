import { Flex, Text } from '@chakra-ui/react';
import CustomBar from '../CustomBar';
import { installments } from 'pages/Home/mockData';

export default function InstallmentsSales({ data }) {
  const graphsToShow = () => {
    if (data?.graphs_to_show?.installments) {
      return data?.installments;
    }
    if (!data?.graphs_to_show?.installments) {
      return installments;
    }
  };
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
      <Flex position="relative" p="1rem 0" w="100%">
        {!data?.graphs_to_show?.installments && (
          <Text
            position="absolute"
            transform="translate(-50%, -50%)"
            left="50%"
            top="50%"
            p="1rem"
            borderRadius="0.625rem"
            fontWeight="bold"
            fontSize="1rem"
            color="gray.500"
            zIndex="2"
            w="100%"
            textAlign="center"
          >
            Não há dados para o período selecionado
          </Text>
        )}
        <Flex
          filter={data?.graphs_to_show?.installments ? '' : 'blur(6px)'}
          bg={data?.graphs_to_show?.installments ? '' : 'gray.200'}
          w="100%"
        >
          <Flex height="190px" w="100%">
            <CustomBar data={graphsToShow()} color="#36A2EB" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
