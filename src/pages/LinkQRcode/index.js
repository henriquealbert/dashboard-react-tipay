import { Flex, Button } from '@chakra-ui/react';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import PaginationTable from 'components/PaginationTable';
import SalesStatus from 'components/SalesStatus';
import TableQRCode from 'components/TableQRCode';
import ToolsMenu from 'components/ToolsMenu';
import { LinkQRCodeIcon } from 'styles/icons';

export default function LinkQRcode() {
  return (
    <Layout>
      <Container>
        <Flex justifyContent="space-between">
          <InnerMenu pageTitle="Vendas por Links/QR Code" />
          <Button variant="green" alignSelf="flex-end" w="260px" h="60px">
            Gerar Cobrança
            <LinkQRCodeIcon ml="16px" w="29px" h="29px" color="white" />
          </Button>
        </Flex>
        <Flex my="36px">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableQRCode />
        <PaginationTable />
      </Container>
    </Layout>
  );
}
