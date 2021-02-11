import { Flex } from '@chakra-ui/react';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'components/ErrorMessage';

import useTransfers from 'hooks/useTransfers';
import { useTransfersContext } from './TransfersContext';

export default function Transferencias() {
  const ctx = useTransfersContext();
  const {
    data: TABLE_data,
    isError: TABLE_isError,
    error: TABLE_error,
    isLoading: TABLE_isLoading
  } = useTransfers(ctx);

  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Transferências" useContext={ctx} />
        <Flex mt="1rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu
          tableID="table_transfers"
          csvFilename="tipay_transfers.csv"
          useContext={ctx}
        />

        {TABLE_isError && <ErrorMessage message={TABLE_error.message} />}
        {TABLE_isLoading && <TableSalesSkeleton />}
        {TABLE_data && (
          <TableTransfers
            id="table_transfers"
            data={TABLE_data}
            useContext={ctx}
          />
        )}
      </Container>
    </Layout>
  );
}
