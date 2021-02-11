import { Box } from '@chakra-ui/layout';

import Layout from 'components/Layout';
import Container from 'components/Container';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'components/ErrorMessage';
import TableSales from 'components/TableSales';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import SalesStatus from 'components/SalesStatus';
import SalesPercentages from 'components/SalesPercentages';
import InnerMenu from 'components/InnerMenu';

import { useSalesContext } from './SalesContext';
import useTransactions from 'hooks/useTransactions';

export default function Vendas() {
  const ctx = useSalesContext();

  const { data, isError, error, isLoading } = useTransactions(ctx);

  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Vendas" useContext={ctx} />

        <Box
          display={{ base: 'block', xl: 'grid' }}
          gridTemplateColumns={{ xl: '1fr 1fr', xxl: '2fr 1fr' }}
          gridGap={{ xl: '1.313rem' }}
          w="100%"
          mt="0.5rem"
        >
          <SalesStatus />
          <SalesPercentages />
        </Box>

        <ToolsMenu
          tableID="table_sales"
          csvFilename="tipay_sales.csv"
          useContext={ctx}
        />

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && <TableSales id="table_sales" data={data} useContext={ctx} />}
      </Container>
    </Layout>
  );
}
