import { Flex } from '@chakra-ui/react';

import InstallmentsSales from './InstallmentsSales';
import TotalCreditSales from './TotalCreditSales';

export default function SalesCredit() {
  const theme = {
    legends: {
      text: { fontSize: 16, color: '#606060', fontFamily: 'Montserrat' }
    },
    labels: {
      text: {
        fontSize: 15,
        color: '#606060',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
      }
    }
  };
  return (
    <Flex
      bg="white"
      py="1.75rem"
      px="3.75rem"
      mt="1.125rem"
      boxShadow="0rem 0.188rem 10px #0000000A"
      borderRadius="10px"
      w="100%"
    >
      <TotalCreditSales theme={theme} />
      <InstallmentsSales theme={theme} />
    </Flex>
  );
}
