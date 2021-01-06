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
      py="28px"
      px="60.75px"
      maxW="1000px"
      mt="18px"
      boxShadow="0px 3px 10px #0000000A"
      borderRadius="10px"
    >
      <TotalCreditSales theme={theme} />
      <InstallmentsSales theme={theme} />
    </Flex>
  );
}