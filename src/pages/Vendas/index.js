import Layout from 'components/Layout';
import Container from 'components/Container';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'components/ErrorMessage';
import TableSales from 'components/TableSales';
import TableSalesSkeleton from 'components/TableSalesSkeleton';

import { useSalesContext } from './SalesContext';
import useTransactions from 'hooks/useTransactions';
import HeaderSales from './HeaderSales';

export default function Vendas() {
  const ctx = useSalesContext();

  const { data, isError, error, isLoading } = useTransactions(ctx);

  return (
    <Layout>
      <Container>
        <HeaderSales useContext={ctx} />

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
