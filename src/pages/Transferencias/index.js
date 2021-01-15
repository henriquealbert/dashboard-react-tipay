import { Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';

export default function Transferencias() {
  const data = [
    {
      id: 152218268,
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      status: 0
    },
    {
      id: 152218267,
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      status: 1
    },
    {
      id: 152218266,
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      status: 1
    }
  ];
  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Transferências" />
        <Flex my="36px">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableTransfers data={data} />
      </Container>
    </Layout>
  );
}
