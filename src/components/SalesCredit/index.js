import { Box } from '@chakra-ui/react';

import InstallmentsSales from './InstallmentsSales';
import TotalCreditSales from './TotalCreditSales';

export default function SalesCredit() {
  return (
    <Box
      bg="white"
      py="1.75rem"
      px={{ base: '0', lg: '1rem', xl: '2rem' }}
      mt="1.125rem"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
      w="100%"
      display={{ base: 'block', md: 'grid' }}
      gridTemplateColumns={{ md: '1fr 3fr' }}
    >
      <TotalCreditSales />
      <InstallmentsSales />
    </Box>
  );
}
