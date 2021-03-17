import { Box, Flex, Text } from '@chakra-ui/react';
import CustomBar from '../CustomBar';
import { avista, parcelada } from 'pages/Home/mockData';

export default function TotalCreditSales({ data }) {
  const graphsToShowCredit = () => {
    if (data?.graphs_to_show?.credit) {
      return data?.credit;
    }
    if (!data?.graphs_to_show?.credit) {
      return avista;
    }
  };
  const graphsToShowCreditInstallment = () => {
    if (data?.credit_installment) {
      return data?.credit_installment;
    }
    if (!data?.credit_installment) {
      return parcelada;
    }
  };

  return (
    <Flex
      direction="column"
      borderRight={{ md: '0.063rem solid #ECECEC' }}
      borderBottom={{ base: '0.063rem solid #ECECEC', md: 'none' }}
      pb={{ base: '2rem', md: '0' }}
      pr={{ xl: '1rem' }}
    >
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        color="gray.500"
        mb="0.875rem"
        ml={{ base: '2rem', md: '1rem', lg: '0' }}
      >
        Vendas no crédito
      </Text>
      <Flex position="relative" p="1rem 0" w="100%">
        {!data?.graphs_to_show?.credit && (
          <Text
            position="absolute"
            transform="translate(-50%, -50%)"
            left="50%"
            top="50%"
            p="1rem"
            borderRadius="0.625rem"
            fontWeight="bold"
            fontSize="0.75rem"
            color="gray.500"
            zIndex="2"
            w="100%"
            textAlign="center"
          >
            Não há dados para o período selecionado
          </Text>
        )}

        <Flex
          ml={{ base: '1rem', lg: '0' }}
          filter={data?.graphs_to_show?.credit ? '' : 'blur(6px)'}
          bg={data?.graphs_to_show?.credit ? '' : 'gray.200'}
          w="100%"
        >
          <Box height="190px" w="100px" mr={{ base: '2rem', md: '0' }}>
            <CustomBar data={graphsToShowCredit()} color="#FF6384" />
          </Box>
          <Box height="190px" w="100px">
            <CustomBar data={graphsToShowCreditInstallment()} color="#FF9F40" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
