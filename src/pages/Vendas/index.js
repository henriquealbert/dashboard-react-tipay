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
import useTransactions from 'hooks/useTransactions';
import ErrorMessage from 'pages/ErrorMessage';

import { getLast3Months, getToday } from 'utils/formatDate';

export default function Vendas() {
  // print
  const printRef = useRef();
  // table csv
  const [csv, setCsv] = useState([]);
  // query
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);
  const [startDate, setStartDate] = useState(getLast3Months());
  const [endDate, setEndDate] = useState(getToday());
  const { data, isError, error, isLoading } = useTransactions(
    `/start_date=${startDate}/end_date=${endDate}/per_page=${per_Page}`,
    `/${page}`
  );

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

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && (
          <TableSales
            id="table_sales"
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
