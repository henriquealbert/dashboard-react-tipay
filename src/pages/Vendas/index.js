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
          display="grid"
          gridTemplateColumns="2fr 1fr"
          gridGap="1.313rem"
          w="100%"
          mt="36px"
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
