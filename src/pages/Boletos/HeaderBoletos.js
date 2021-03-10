import { Box, Flex, Button, Skeleton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BoletoIcon } from 'styles/icons';

import ErrorMessage from 'components/ErrorMessage';
import InnerMenu from 'components/InnerMenu';
import SalesStatus from 'components/SalesStatus';
import useStatisticsBoletos from 'hooks/useStatisticsBoletos';

export default function HeaderBoletos({ useContext }) {
  const { headerStartDate, headerEndDate } = useContext;
  const { data, isError, error, isLoading } = useStatisticsBoletos(
    headerStartDate,
    headerEndDate
  );

  return (
    <Box>
      <Flex
        justifyContent={{ xl: 'space-between' }}
        direction={{ base: 'column', xl: 'row' }}
      >
        <InnerMenu pageTitle="Boletos" useContext={useContext} />

        <Flex alignSelf={{ xl: 'center' }} mt={{ base: '1rem', xl: '2rem' }}>
          <Button
            as={Link}
            to="/boletos/gerar-boleto"
            variant="green"
            fontSize={{ base: '1rem', xxl: '1.25rem' }}
            w={{ base: '100%', xxl: '16.25rem' }}
            h={{ base: '3.5rem', xxl: '3.75rem' }}
          >
            Gerar Boleto
            <BoletoIcon
              ml="1rem"
              w={{ base: '1.75rem', xxl: '2.125rem' }}
              h="1.563rem"
              color="white"
            />
          </Button>
        </Flex>
      </Flex>

      {isError && <ErrorMessage message={error.message} />}
      {isLoading && (
        <Box w="100%" mt="1rem">
          <Skeleton
            h="211px"
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
          />
        </Box>
      )}

      {data && (
        <Flex mt="1rem">
          <SalesStatus data={data?.sales_status} />
        </Flex>
      )}
    </Box>
  );
}
