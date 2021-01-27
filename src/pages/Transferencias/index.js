import { Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import useTransfers from 'hooks/useTransfers';

export default function Transferencias() {
  const data = [
    {
      id: 152218268,
      transfer_date: '2020-10-22T19:00:00.000Z',
      amount: 'R$ 300,00',
      status: 0,
      status_detail: 'Transferência Recusada.'
    },
    {
      id: 152218267,
      transfer_date: '2020-10-22T19:00:00.000Z',
      amount: 'R$ 300,00',
      status: 1,
      status_detail: 'Transferência efetuada com sucesso.'
    },
    {
      id: 152218266,
      transfer_date: '2020-10-22T19:00:00.000Z',
      amount: 'R$ 300,00',
      status: 1,
      status_detail: 'Transferência efetuada com sucesso.'
    }
  ];

  // const { data } = useTransfers();

  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Transferências" />
        <Flex my="2.25rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableTransfers data={data} />
      </Container>
    </Layout>
  );
}
