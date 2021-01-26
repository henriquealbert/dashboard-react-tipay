import { Box } from '@chakra-ui/react';

import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import CalendarComponent from 'components/CalendarComponent';
import CalendarEventInfo from 'components/CalendarEventInfo';
import { useState } from 'react';

export default function Calendario() {
  const data = [
    {
      id: 1,
      groupId: 'sales',
      title: 'R$ 300,00',
      date: '2021-01-01 16:11:41'
    },
    {
      id: 2,
      groupId: 'sales',
      title: 'R$ 700,00',
      date: '2021-01-21 16:11:41'
    },
    {
      id: 3,
      groupId: 'sales',
      title: 'R$ 50,00',
      date: '2021-01-22 16:11:41'
    },
    {
      id: 5,
      groupId: 'sales',
      title: 'R$ 138,00',
      date: '2021-01-30 16:11:41'
    },
    {
      id: 4,
      groupId: 'receivables',
      title: 'R$ 130,00',
      date: '2021-01-01 16:11:41'
    },
    {
      id: 6,
      groupId: 'receivables',
      title: 'R$ 1800,00',
      date: '2021-01-03 16:11:41'
    },
    {
      id: 7,
      groupId: 'receivables',
      title: 'R$ 30,00',
      date: '2021-02-01 16:11:41'
    }
  ];

  const [eventDate, setEventDate] = useState('');

  return (
    <Layout>
      <Container>
        <PageTitle>Calendário de Recebíveis</PageTitle>
        <Box
          display={{ xl: 'grid' }}
          gridTemplateColumns={{ xl: '2fr 1fr' }}
          gridColumnGap={{ xl: '42px' }}
          w="100%"
        >
          <CalendarComponent data={data} setEventDate={setEventDate} />
          <CalendarEventInfo data={data} eventDate={eventDate} />
        </Box>
      </Container>
    </Layout>
  );
}
