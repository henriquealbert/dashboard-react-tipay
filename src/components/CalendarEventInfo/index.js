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
        flexGrow="1"
        maxW="630px"
        maxH="750px"
        bg="white"
        boxShadow="0px 3px 10px #0000000A"
        ml="42px"
        mt="118px"
        p="22px 26px"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <CalendarioIcon color="gray.1100" width="114px" height="100px" />
          <Text
            color="gray.1100"
            fontSize="30px"
            lineHeight="37px"
            fontWeight="bold"
            maxW="328px"
            textAlign="center"
            mt="35px"
          >
            Selecione um dia no calendário
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Box
      flexGrow="1"
      maxW="630px"
      maxH="750px"
      bg="white"
      boxShadow="0px 3px 10px #0000000A"
      ml="42px"
      mt="118px"
      p="22px 26px"
      borderRadius="10px"
    >
      <Text color="gray.700" fontSize="16px" fontWeight="semibold" mb="18px">
        Detalhes {eventDate ? formatDate(eventDate) : ''}
      </Text>

      {sales.length !== 0 && <EventSales data={sales} />}
      {receivables.length !== 0 && <EventReceivables data={receivables} />}
    </Box>
  );
}
