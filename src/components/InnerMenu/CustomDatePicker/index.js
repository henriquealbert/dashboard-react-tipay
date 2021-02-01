import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import br from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';

import CustomDateInput from './CustomDateInput';

registerLocale('pt-BR', br);

export default function CustomDatePicker({
  setActive,
  handleActive,
  startDate,
  endDate,
  onChange
}) {
  return (
    <DatePicker
      customInput={
        <CustomDateInput setActive={setActive} handleActive={handleActive} />
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
