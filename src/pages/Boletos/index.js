import { Box, Button, Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import PaginationTable from 'components/PaginationTable';
import SalesStatus from 'components/SalesStatus';
import SalesTable from 'components/SalesTable';
import ToolsMenu from 'components/ToolsMenu';
import { BoletoIcon } from 'styles/icons';

export default function Boletos() {
  return (
    <Layout>
      <Container>
        <Flex justifyContent="space-between">
          <InnerMenu pageTitle="Boletos" />
          <Button variant="green" alignSelf="flex-end" w="260px" h="60px">
            Gerar Boleto
            <BoletoIcon ml="16px" w="34px" h="25px" color="white" />
          </Button>
        </Flex>
        <Box my="36px">
          <SalesStatus />
        </Box>
        <ToolsMenu />
        <SalesTable boleto />
        <PaginationTable />
      </Container>
    </Layout>
  );
}
