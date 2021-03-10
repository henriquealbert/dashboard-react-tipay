import Container from 'components/Container';
import Layout from 'components/Layout';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'components/ErrorMessage';

import useTransfers from 'hooks/useTransfers';
import { useTransfersContext } from './TransfersContext';
import HeaderTransfers from './HeaderTransfers';

export default function Transferencias() {
  const ctx = useTransfersContext();
  const { data, isError, error, isLoading } = useTransfers(ctx);

  return (
    <Layout>
      <Container>
        <HeaderTransfers useContext={ctx} />

        <ToolsMenu
          tableID="table_transfers"
          csvFilename="tipay_transfers.csv"
          useContext={ctx}
        />

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && (
          <TableTransfers id="table_transfers" data={data} useContext={ctx} />
        )}
      </Container>
    </Layout>
  );
}
