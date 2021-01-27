import { Box } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import SalesPercentages from 'components/SalesPercentages';
import SalesStatus from 'components/SalesStatus';
import ToolsMenu from 'components/ToolsMenu';
import TableSales from 'components/TableSales';
import useTransactions from 'hooks/useTransactions';

export default function Vendas() {
  const { data } = useTransactions();

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

        <ToolsMenu />
        <TableSales data={data?.entries} />
      </Container>
    </Layout>
  );
}
