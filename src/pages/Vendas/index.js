import { Box } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import SalesPercentages from 'components/SalesPercentages';
import SalesStatus from 'components/SalesStatus';
import ToolsMenu from 'components/ToolsMenu';
import SalesTable from 'components/SalesTable';
import PaginationTable from 'components/PaginationTable';

export default function Vendas() {
  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Vendas" />
        <Box
          display="grid"
          gridTemplateColumns="minmax(200px, 987px) 1fr"
          gridGap="21px"
          w="100%"
          mt="36px"
        >
          <SalesStatus />
          <SalesPercentages />
        </Box>

        <ToolsMenu />
        <SalesTable />
        <PaginationTable />
      </Container>
    </Layout>
  );
}
