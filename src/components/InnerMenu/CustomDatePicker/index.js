import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import br from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';

import CustomDateInput from './CustomDateInput';
import { useState } from 'react';
import { normalizeDate } from 'utils/formatDate';

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
    handleDateRange([normalizeDate(start), normalizeDate(end)]);
  };

  return (
    <DatePicker
      customInput={
        <CustomDateInput
          setActive={setActive}
          handleActive={handleActive}
          isFetching={isFetching}
        />
      }
      locale="pt-BR"
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      dateFormat="yyyy/MM/dd"
      selectsRange
    />
  );
}
