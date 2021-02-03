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
import { useQueryClient } from 'react-query';

export default function InnerMenu({
  pageTitle,
  componentRef,
  setStartDate,
  setEndDate,
  pageKey
}) {
  const queryClient = useQueryClient();
  const isFetching = queryClient.isFetching();

  const handleDateRange = (dates) => {
    queryClient.removeQueries([pageKey]);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
      direction={{
        base: 'column',
        xxl: `${pageTitle === 'Home' ? 'row' : 'column'}`
      }}
      flexWrap={{ base: 'wrap', xxl: 'nowrap' }}
      w="100%"
      h="auto"
      position="relative"
    >
      <PageTitle>{pageTitle}</PageTitle>
      <Flex overflowX={{ base: 'auto' }} w="100%" pb="1rem" overflowY="hidden">
        <Button
          variant="outline"
          disabled={isFetching ? true : false}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr="0.875rem"
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
          disabled={isFetching ? true : false}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr="0.875rem"
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
          disabled={isFetching ? true : false}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr="0.875rem"
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
          disabled={isFetching ? true : false}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr="0.875rem"
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
          disabled={isFetching ? true : false}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr="0.875rem"
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
          disabled={isFetching ? true : false}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          mr="0.875rem"
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
        {pageTitle === 'Home' && <PrintBtn componentRef={componentRef} />}
      </Flex>
    </Flex>
  );
}
