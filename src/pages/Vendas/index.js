import { Box } from '@chakra-ui/react';
import { useState } from 'react';

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

export default function Vendas() {
  // states
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);

  // query
  const { data, isError, error, isLoading } = useTransactions(
    `/per_page=${per_Page}`,
    `/${page}`
  );

  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Vendas" />
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
        />

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && <TableSales data={data} setPage={setPage} page={page} />}
      </Container>
    </Layout>
  );
}
