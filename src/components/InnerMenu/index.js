import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import ExcelExport from 'components/ExcelExport';
import PageTitle from 'components/PageTitle';
import CustomDatePicker from './CustomDatePicker';

import {
  getToday,
  getYesterday,
  getLast7Day,
  getLast15Day,
  getLast30Day,
  getLast3Months
} from 'utils/formatDate';

export default function InnerMenu({ pageTitle }) {
  const [active, setActive] = useState('3 meses');

  const handleActive = (label) => {
    if (active === label) {
      return true;
    } else {
      return false;
    }
  };

  // specific date
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleDateRange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleChange = () => {
    console.log('hoje', getToday());
    console.log('ontem', getYesterday());
    console.log('7 dias', getLast7Day());
    console.log('15 dias', getLast15Day());
    console.log('30 dias', getLast30Day());
    console.log('3 meses', getLast3Months());
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
          mr="0.875rem"
          onClick={() => {
            setActive('hoje');

            handleChange();
          }}
          isActive={handleActive('hoje')}
        >
          Hoje
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('ontem')}
          isActive={handleActive('ontem')}
        >
          Ontem
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('7 dias')}
          isActive={handleActive('7 dias')}
        >
          Últimos 7 dias
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('15 dias')}
          isActive={handleActive('15 dias')}
        >
          Últimos 15 dias
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('30 dias')}
          isActive={handleActive('30 dias')}
        >
          Últimos 30 dias
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('3 meses')}
          isActive={handleActive('3 meses')}
        >
          Últimos 3 meses
        </Button>

        <CustomDatePicker
          setActive={setActive}
          handleActive={handleActive}
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateRange}
        />

        {pageTitle === 'Home' && <ExcelExport />}
      </Flex>
    </Flex>
  );
}
