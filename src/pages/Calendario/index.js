import { Flex } from '@chakra-ui/react';

import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import CalendarComponent from 'components/CalendarComponent';
import CalendarEventInfo from 'components/CalendarEventInfo';

export default function Calendario() {
  return (
    <Layout>
      <Container>
        <PageTitle>Calendário de Recebíveis</PageTitle>
        <Flex justifyContent="space-between" w="100%">
          <CalendarComponent />
          <CalendarEventInfo />
        </Flex>
      </Container>
    </Layout>
  );
}
