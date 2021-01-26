import { Box, Flex, Text } from '@chakra-ui/react';

import EventReceivables from './EventReceivables';
import EventSales from './EventSales';
import { formatDate } from 'utils/formatDate';
import { CalendarioIcon } from 'styles/icons';

export default function CalendarEventInfo({ data, eventDate }) {
  const sales = eventDate
    ? data
        ?.filter((item) => item.groupId === 'sales')
        ?.filter((item) => item.date.includes(eventDate))
    : [];
  const receivables = eventDate
    ? data
        ?.filter((item) => item.groupId === 'receivables')
        ?.filter((item) => item.date.includes(eventDate))
    : [];

  if (sales?.length === 0 && receivables?.length === 0) {
    return (
      <Flex
        h="calc(100vh - 5rem)"
        bg="white"
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        p="1.375rem 1.625rem"
        borderRadius="0.625rem"
        justifyContent="center"
        alignItems="center"
        mt="7.375rem"
        id="event_info"
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <CalendarioIcon color="gray.1100" width="114px" height="6.25rem" />
          <Text
            color="gray.1100"
            fontSize="30px"
            lineHeight="37px"
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
    <Box
      h="calc(100vh - 5rem)"
      bg="white"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      p="1.375rem 1.625rem"
      borderRadius="0.625rem"
      justifyContent="center"
      alignItems="center"
      mt="7.375rem"
    >
      <Text
        color="gray.700"
        fontSize="1rem"
        fontWeight="semibold"
        mb="1.125rem"
      >
        Detalhes {eventDate ? formatDate(eventDate) : ''}
      </Text>

      {sales.length !== 0 && <EventSales data={sales} />}
      {receivables.length !== 0 && <EventReceivables data={receivables} />}
    </Box>
  );
}
