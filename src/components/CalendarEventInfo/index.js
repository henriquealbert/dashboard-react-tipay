import { Box, Text } from '@chakra-ui/react';
import CalendarReceivables from './CalendarReceivables';
import CalendarSales from './CalendarSales';

export default function CalendarEventInfo() {
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
        Detalhes 25/11/2020
      </Text>

      <CalendarSales />
      <CalendarReceivables />
    </Box>
  );
}
