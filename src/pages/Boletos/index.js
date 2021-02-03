import { Button, Flex } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSales from 'components/TableSales';
import ToolsMenu from 'components/ToolsMenu';
import { BoletoIcon } from 'styles/icons';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import ErrorMessage from 'pages/ErrorMessage';
import { getLast3Months, getToday } from 'utils/formatDate';

import { useTransactions_TABLE } from 'hooks/useTransactions';

export default function Boletos() {
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
  } = useTransactions_TABLE(`/payment_type=3/per_page=${per_Page}`, `/${page}`);

  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xxl: 'space-between' }}
          direction={{ base: 'column', xxl: 'row' }}
        >
          <InnerMenu
            pageTitle="Boletos"
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            pageKey="transactions"
          />
          <Flex alignSelf={{ xxl: 'center' }} mt={{ base: '1rem', xlg: '0' }}>
            <Button
              as={Link}
              to="/boletos/gerar-boleto"
              variant="green"
              w={{ base: '100%', xlg: '260px' }}
              h="3.75rem"
            >
              Gerar Boleto
              <BoletoIcon ml="1rem" w="2.125rem" h="1.563rem" color="white" />
            </Button>
          </Flex>
        </Flex>
        <Flex mt="1rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu
          setPer_Page={setPer_Page}
          per_Page={per_Page}
          pageKey="transactions"
          tableID="table_boleto"
          componentRef={printRef}
          csv={csv}
          csvFilename="tipay_boletos.csv"
        />

        {TABLE_isError && <ErrorMessage message={TABLE_error.message} />}
        {TABLE_isLoading && <TableSalesSkeleton />}
        {TABLE_data && (
          <TableSales
            id="table_boleto"
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
