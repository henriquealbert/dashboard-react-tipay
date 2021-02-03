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

import { getLast3Months, getToday } from 'utils/formatDate';

export default function Transferencias() {
  // print
  const printRef = useRef();
  // table csv
  const [csv, setCsv] = useState([]);

  // query
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);
  const [startDate, setStartDate] = useState(getLast3Months());
  const [endDate, setEndDate] = useState(getToday());
  const { data, error, isError, isLoading } = useTransfers(
    `/start_date=${startDate}/end_date=${endDate}/per_page=${per_Page}`,
    `/${page}`
  );

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
