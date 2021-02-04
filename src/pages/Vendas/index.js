import { Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import SalesPercentages from 'components/SalesPercentages';
import SalesStatus from 'components/SalesStatus';
import ToolsMenu from 'components/ToolsMenu';
import TableSales from 'components/TableSales';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import ErrorMessage from 'pages/ErrorMessage';
import { getLast3Months, getToday } from 'utils/formatDate';

import { useTransactions_TABLE } from 'hooks/useTransactions';
import { useTransaction } from 'hooks/useTransaction';

export default function Vendas() {
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
  } = useTransactions_TABLE(`/per_page=${per_Page}`, `/${page}`);

  /************* DETAILS *************/
  const [transactionID, setTransactionID] = useState(null);
  const { data: detailData } = useTransaction(transactionID);

  return (
    <Layout>
      <Container>
        <InnerMenu
          pageTitle="Vendas"
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          pageKey="transactions"
        />

        <Box
          display={{ base: 'block', xl: 'grid' }}
          gridTemplateColumns={{ xl: '1fr 1fr', xxl: '2fr 1fr' }}
          gridGap={{ xl: '1.313rem' }}
          w="100%"
          mt="1rem"
          mb="2rem"
        >
          <SalesStatus />
          <SalesPercentages />
        </Box>

        <ToolsMenu
          setPer_Page={setPer_Page}
          per_Page={per_Page}
          pageKey="transactions"
          tableID="table_sales"
          componentRef={printRef}
          csv={csv}
          csvFilename="tipay_sales.csv"
        />

        {TABLE_isError && <ErrorMessage message={TABLE_error.message} />}
        {TABLE_isLoading && <TableSalesSkeleton />}
        {TABLE_data && (
          <TableSales
            id="table_sales"
            ref={printRef}
            data={TABLE_data}
            setPage={setPage}
            setCsv={setCsv}
            setTransactionID={setTransactionID}
            detailData={detailData}
          />
        )}
      </Container>
    </Layout>
  );
}
