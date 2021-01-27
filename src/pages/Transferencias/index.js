import { Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import useTransfers from 'hooks/useTransfers';
import { transfers } from 'db';

export default function Transferencias() {
  // const { data } = useTransfers();

  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Transferências" />
        <Flex mt="1rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableTransfers data={transfers} />
      </Container>
    </Layout>
  );
}
