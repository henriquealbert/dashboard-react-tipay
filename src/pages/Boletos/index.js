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
import { normalizeDateUTC } from 'utils/formatDate';

import useTransactions from 'hooks/useTransactions';
import { useBoletoContext } from './BoletoContext';

export default function Boletos() {
  const ctx = useBoletoContext();

  const {
    data: TABLE_data,
    isError: TABLE_isError,
    error: TABLE_error,
    isLoading: TABLE_isLoading
  } = useTransactions(
    ctx.identification,
    ctx.payer,
    ctx.amount,
    ctx.status,
    normalizeDateUTC(ctx.start_date),
    normalizeDateUTC(ctx.end_date),
    '3',
    ctx.per_Page,
    ctx.page
  );

  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xxl: 'space-between' }}
          direction={{ base: 'column', xxl: 'row' }}
        >
          <InnerMenu pageTitle="Boletos" useContext={ctx} />

          <Flex alignSelf={{ xxl: 'center' }} mt={{ base: '1rem', xlg: '0' }}>
            <Button
              as={Link}
              to="/boletos/gerar-boleto"
              variant="green"
              w={{ base: '100%', xlg: '260px' }}
              h="3.75rem"
            >
              Gerar Boleto
              <BoletoIcon ml="1rem" w="2.125rem" h="1.563rem" color="white" />
            </Button>
          </Flex>
        </Flex>

        <Flex mt="1rem">
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
