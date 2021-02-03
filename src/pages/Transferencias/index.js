import { Flex } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'pages/ErrorMessage';
import { getLast3Months, getToday } from 'utils/formatDate';

import { useTransfers_TABLE } from 'hooks/useTransfers';

export default function Transferencias() {
  /************* HEADER *************/
  const [, setStartDate] = useState(getLast3Months());
  const [, setEndDate] = useState(getToday());

  /************* TABLE *************/
  const printRef = useRef();
  const [csv, setCsv] = useState([]);
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);
  const {
    data: TABLE_data,
    isError: TABLE_isError,
    error: TABLE_error,
    isLoading: TABLE_isLoading
  } = useTransfers_TABLE(`/per_page=${per_Page}`, `/${page}`);

  return (
    <Layout>
      <Container>
        <InnerMenu
          pageTitle="Transferências"
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          pageKey="transfers"
        />
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

        {TABLE_isError && <ErrorMessage message={TABLE_error.message} />}
        {TABLE_isLoading && <TableSalesSkeleton />}
        {TABLE_data && (
          <TableTransfers
            id="table_transfers"
            ref={printRef}
            data={TABLE_data}
            setPage={setPage}
            setCsv={setCsv}
          />
        )}
      </Container>
    </Layout>
  );
}
