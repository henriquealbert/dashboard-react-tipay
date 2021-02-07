import { Box, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';

import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import CalendarComponent from 'components/CalendarComponent';
import CalendarEventInfo from 'components/CalendarEventInfo';
import ErrorMessage from 'pages/ErrorMessage';
import { CalendarWrapper } from './styles';
import { getFirstDayMonth, getLastDayMonth, getToday } from 'utils/formatDate';

import {
  useCalendar_ExtractDay,
  useCalendar_ScheduledToReceive,
  useCalendar_Sold
} from 'hooks/useCalendar';
import { useTransaction } from 'hooks/useTransaction';

export default function Calendario() {
  const [currentStart, setCurrentStart] = useState(getFirstDayMonth());
  const [currentEnd, setCurrentEnd] = useState(getLastDayMonth());
  /************* SOLD *************/
  const {
    data: SOLD_data,
    isError: SOLD_isError,
    error: SOLD_error,
    isLoading: SOLD_isLoading
  } = useCalendar_Sold(currentStart, currentEnd);

  /************* SCHEDULE TO RECEIVE *************/
  const {
    data: SCHEDULE_data,
    isError: SCHEDULE_isError,
    error: SCHEDULE_error,
    isLoading: SCHEDULE_isLoading
  } = useCalendar_ScheduledToReceive(currentStart, currentEnd);

  /************* EXTRACT DAY *************/
  const [eventDate, setEventDate] = useState(getToday());
  const {
    data: EXTRACTDAY_data,
    isError: EXTRACTDAY_isError,
    error: EXTRACTDAY_error,
    isLoading: EXTRACTDAY_isLoading
  } = useCalendar_ExtractDay(eventDate);

  /************* DETAILS *************/
  const [transactionID, setTransactionID] = useState(null);
  const { data: detailData } = useTransaction(transactionID);

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
          <CalendarWrapper>
            {SOLD_isError && <ErrorMessage message={SOLD_error.message} />}
            {SCHEDULE_isError && (
              <ErrorMessage message={SCHEDULE_error.message} />
            )}
            {SOLD_isLoading && SCHEDULE_isLoading && (
              <Skeleton h="100%" w="100%" borderRadius="0.625rem" />
            )}
            {SOLD_data && SCHEDULE_data && (
              <CalendarComponent
                data={[...SOLD_data, ...SCHEDULE_data]}
                setCurrentStart={setCurrentStart}
                setCurrentEnd={setCurrentEnd}
                setEventDate={setEventDate}
              />
            )}
          </CalendarWrapper>

          <Box
            h="calc(100vh - 5rem)"
            bg="white"
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            p={EXTRACTDAY_isLoading ? '' : '1.375rem 1.625rem'}
            borderRadius="0.625rem"
            justifyContent="center"
            alignItems="center"
            mt="7.375rem"
            maxH="calc(100vh - 5rem)"
            overflowY="auto"
          >
            {EXTRACTDAY_isError && (
              <ErrorMessage message={EXTRACTDAY_error.message} />
            )}
            {EXTRACTDAY_isLoading && (
              <Skeleton h="100%" w="100%" borderRadius="0.625rem" />
            )}
            {EXTRACTDAY_data && (
              <CalendarEventInfo
                data={EXTRACTDAY_data}
                eventDate={eventDate}
                setTransactionID={setTransactionID}
                detailData={detailData}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
