import Container from 'components/Container';
import Layout from 'components/Layout';
import TableSales from 'components/TableSales';
import ToolsMenu from 'components/ToolsMenu';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import ErrorMessage from 'components/ErrorMessage';

import useTransactions from 'hooks/useTransactions';
import { useBoletoContext } from './BoletoContext';
import HeaderBoletos from './HeaderBoletos';

export default function Boletos() {
  const ctx = useBoletoContext();

  const { data, isError, error, isLoading } = useTransactions(ctx);

  return (
    <Layout>
      <Container>
        <HeaderBoletos useContext={ctx} />

        <ToolsMenu
          tableID="table_boleto"
          csvFilename="tipay_boletos.csv"
          useContext={ctx}
        />

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && <TableSales id="table_boleto" data={data} useContext={ctx} />}
      </Container>
    </Layout>
  );
}
