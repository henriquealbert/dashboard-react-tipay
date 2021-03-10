import { Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import PageTitle from 'components/PageTitle';
import CustomDatePicker from './CustomDatePicker';
import PrintBtn from 'components/PrintBtn';

import {
  getToday,
  getYesterday,
  getLast7Day,
  getLast15Day,
  getLast30Day,
  getLast3Months
} from 'utils/formatDate';
import { useQueryClient, useIsFetching } from 'react-query';

export default function InnerMenu({ pageTitle, useContext }) {
  const {
    printRef,
    pageKeyHeader,
    setHeaderStartDate,
    setHeaderEndDate
  } = useContext;

  const queryClient = useQueryClient();
  const isFetching = useIsFetching();

  const handleDateRange = (dates) => {
    queryClient.removeQueries([pageKeyHeader]);
    const [start, end] = dates;
    setHeaderStartDate(start);
    setHeaderEndDate(end);
  };

  // label
  const [active, setActive] = useState('3 meses');
  const handleActive = (label) => {
    if (active === label) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Flex
      direction="column"
      flexWrap={{ base: 'wrap', xxl: 'nowrap' }}
      w="100%"
      h="auto"
      position="relative"
    >
      <PageTitle>{pageTitle}</PageTitle>
      <Flex overflowX={{ base: 'auto' }} w="100%" pb="1rem" overflowY="hidden">
        <Button
          variant="outline"
          padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
          disabled={isFetching}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr={{ base: '0.5rem', xxl: '0.875rem' }}
          onClick={() => {
            setActive('hoje');
            handleDateRange([getToday(), getToday()]);
          }}
          isActive={handleActive('hoje')}
        >
          Hoje
        </Button>
        <Button
          variant="outline"
          padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
          disabled={isFetching}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr={{ base: '0.5rem', xxl: '0.875rem' }}
          onClick={() => {
            setActive('ontem');
            handleDateRange([getYesterday(), getYesterday()]);
          }}
          isActive={handleActive('ontem')}
        >
          Ontem
        </Button>
        <Button
          variant="outline"
          padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
          disabled={isFetching}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr={{ base: '0.5rem', xxl: '0.875rem' }}
          onClick={() => {
            setActive('7 dias');
            handleDateRange([getLast7Day(), getToday()]);
          }}
          isActive={handleActive('7 dias')}
        >
          Últimos 7 dias
        </Button>
        <Button
          variant="outline"
          padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
          disabled={isFetching}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr={{ base: '0.5rem', xxl: '0.875rem' }}
          onClick={() => {
            setActive('15 dias');
            handleDateRange([getLast15Day(), getToday()]);
          }}
          isActive={handleActive('15 dias')}
        >
          Últimos 15 dias
        </Button>
        <Button
          variant="outline"
          padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
          disabled={isFetching}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr={{ base: '0.5rem', xxl: '0.875rem' }}
          onClick={() => {
            setActive('30 dias');
            handleDateRange([getLast30Day(), getToday()]);
          }}
          isActive={handleActive('30 dias')}
        >
          Últimos 30 dias
        </Button>
        <Button
          variant="outline"
          padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
          disabled={isFetching}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr={{ base: '0.5rem', xxl: '0.875rem' }}
          onClick={() => {
            setActive('3 meses');
            handleDateRange([getLast3Months(), getToday()]);
          }}
          isActive={handleActive('3 meses')}
        >
          Últimos 3 meses
        </Button>
        <Box mr="auto">
          <CustomDatePicker
            setActive={setActive}
            handleActive={handleActive}
            handleDateRange={handleDateRange}
            isFetching={isFetching}
          />
        </Box>
        {pageTitle === 'Home' && <PrintBtn componentRef={printRef} />}
      </Flex>
    </Flex>
  );
}
