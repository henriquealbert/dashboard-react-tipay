import { Flex } from '@chakra-ui/react';

import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import CalendarComponent from 'components/CalendarComponent';
import CalendarEventInfo from 'components/CalendarEventInfo';

export default function Calendario() {
  const data = [
    {
      groupId: 'Vendas',
      title: 'R$ 300,00',
      date: '2021-01-01'
    },
    {
      groupId: 'Vendas',
      title: 'R$ 700,00',
      date: '2021-01-21'
    },
    {
      groupId: 'Vendas',
      title: 'R$ 50,00',
      date: '2021-01-22'
    },
    {
      groupId: 'Vendas',
      title: 'R$ 138,00',
      date: '2021-01-30'
    },
    {
      groupId: 'Recebíveis',
      title: 'R$ 130,00',
      date: '2021-01-01'
    },
    {
      groupId: 'Recebíveis',
      title: 'R$ 1800,00',
      date: '2021-01-03'
    },
    {
      groupId: 'Recebíveis',
      title: 'R$ 30,00',
      date: '2021-02-01'
    }
  ];
  return (
    <Layout>
      <Container>
        <PageTitle>Calendário de Recebíveis</PageTitle>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          w="100%"
        >
          <CalendarComponent data={data} />
          <CalendarEventInfo />
        </Flex>
      </Container>
    </Layout>
  );
}
