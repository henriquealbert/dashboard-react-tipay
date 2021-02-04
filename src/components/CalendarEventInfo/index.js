import { Flex, Text } from '@chakra-ui/react';

import EventReceivables from './EventReceivables';
import EventSales from './EventSales';
import { formatDate } from 'utils/formatDate';
import { CalendarioIcon } from 'styles/icons';

export default function CalendarEventInfo({ data, eventDate }) {
  if (data?.transactions?.length === 0 && data?.receivables?.length === 0) {
    return (
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <Flex direction="column" justifyContent="center" alignItems="center">
          <CalendarioIcon color="gray.1100" width="114px" height="6.25rem" />
          <Text
            color="gray.1100"
            fontSize="1.875rem"
            lineHeight="2.313rem"
            fontWeight="bold"
            maxW="31.75rem"
            textAlign="center"
            mt="2.188rem"
          >
            Selecione um dia no calendário
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <Text
        color="gray.700"
        fontSize="1rem"
        fontWeight="semibold"
        mb="1.125rem"
      >
        Detalhes {eventDate ? formatDate(eventDate) : ''}
      </Text>

      {data?.transactions?.length !== 0 && (
        <EventSales data={data?.transactions} />
      )}
      {data?.receivables?.length !== 0 && (
        <EventReceivables data={data?.receivables} />
      )}
    </>
  );
}
