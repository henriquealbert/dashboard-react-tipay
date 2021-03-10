import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import br from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import { normalizeDate } from 'utils/formatDate';
import { Button } from '@chakra-ui/button';
import { CalendarioIcon } from 'styles/icons';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react';

registerLocale('pt-BR', br);

export default function CustomDatePicker({
  setActive,
  handleActive,
  handleDateRange,
  isFetching
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (!end) return;
    handleDateRange([normalizeDate(start), normalizeDate(end)]);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="outline"
          padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
          disabled={isFetching}
          cursor={isFetching ? 'not-allowed' : 'pointer'}
          onClick={() => setActive('data')}
          isActive={handleActive('data')}
          mr={{ base: '4rem', xl: 'auto' }}
        >
          Data Específica <CalendarioIcon ml="0.625rem" />
        </Button>
      </PopoverTrigger>
      <PopoverContent p="0" m="0" w="244px" h="241px">
        <PopoverArrow />
        <PopoverBody p="0" m="0">
          <DatePicker
            locale="pt-BR"
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy/MM/dd"
            selectsRange
            inline
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
