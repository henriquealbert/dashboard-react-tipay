import { Flex } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import useTransfers from 'hooks/useTransfers';
import ErrorMessage from 'pages/ErrorMessage';

export default function Transferencias() {
  // print
  const printRef = useRef();
  // table csv
  const [csv, setCsv] = useState([]);

  // query
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);

  // const { data, error, isError, isLoading } = useTransfers(
  //   `/per_page=${per_Page}`,
  //   `/${page}`
  // );
  const { data, error, isError, isLoading } = useTransfers('', `/${page}`);

  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Transferências" />
        <Flex mt="1rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu
          setPer_Page={setPer_Page}
          per_Page={per_Page}
          pageKey="transfers"
          tableID="table_transfers"
          componentRef={printRef}
          csv={csv}
          csvFilename="tipay_transfers.csv"
        />

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && (
          <TableTransfers
            id="table_transfers"
            ref={printRef}
            data={data}
            setPage={setPage}
            setCsv={setCsv}
          />
        )}
      </Container>
    </Layout>
  );
}
