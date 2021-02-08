import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import br from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import { Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { SearchIcon } from '@chakra-ui/icons';
// import { useQueryClient } from 'react-query';

registerLocale('pt-BR', br);

export default function CustomDatePicker({
  setStartDate,
  // setEndDate,
  startDate
  // endDate,
  // pageKey
}) {
  // const queryClient = useQueryClient();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData);

    console.log(obj);

    // queryClient.removeQueries([pageKey]);
  };

  return (
    <Flex
      as="form"
      w="100%"
      justifyContent="center"
      alignItems="center"
      borderRadius="0.313rem"
      border="1px solid"
      borderColor="gray.1100"
      onSubmit={handleSubmit}
    >
      <DatePicker
        locale="pt-BR"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
        dateFormat="dd/MM/yyyy"
      />
      <Text as="span">-</Text>

      <Button type="submit" cursor="pointer" bg="white">
        <SearchIcon color="gray.1000" w={4} h={4} />
      </Button>
    </Flex>
  );
}
