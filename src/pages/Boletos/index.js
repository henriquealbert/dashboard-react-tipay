import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BoletoIcon } from 'styles/icons';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSales from 'components/TableSales';
import ToolsMenu from 'components/ToolsMenu';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import ErrorMessage from 'pages/ErrorMessage';

import useTransactions from 'hooks/useTransactions';
import { useBoletoContext } from './BoletoContext';

export default function Boletos() {
  const ctx = useBoletoContext();

  const {
    data: TABLE_data,
    isError: TABLE_isError,
    error: TABLE_error,
    isLoading: TABLE_isLoading
  } = useTransactions(ctx);

  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xl: 'space-between' }}
          direction={{ base: 'column', xl: 'row' }}
        >
          <InnerMenu pageTitle="Boletos" useContext={ctx} />

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

        <Flex mt="0.5rem">
          <SalesStatus />
        </Flex>

        <ToolsMenu
          tableID="table_boleto"
          csvFilename="tipay_boletos.csv"
          useContext={ctx}
        />

        {TABLE_isError && <ErrorMessage message={TABLE_error.message} />}
        {TABLE_isLoading && <TableSalesSkeleton />}
        {TABLE_data && (
          <TableSales id="table_boleto" data={TABLE_data} useContext={ctx} />
        )}
      </Container>
    </Layout>
  );
}
