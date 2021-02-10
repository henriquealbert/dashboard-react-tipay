import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Flex, Text, Input, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useQueryClient } from 'react-query';
import br from 'date-fns/locale/pt-BR';

import { formatDatepicker } from 'utils/formatDate';

registerLocale('pt-BR', br);

export default function CustomDatePicker({ useContext }) {
  const queryClient = useQueryClient();

  const {
    pageKey,
    setStart_date,
    setEnd_date,
    start,
    setStart,
    end,
    setEnd
  } = useContext;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData);
    queryClient.removeQueries([pageKey]);

    setStart_date(formatDatepicker(obj.start));
    setEnd_date(formatDatepicker(obj.end));
  };

  return (
    <Flex
      as="form"
      w="100%"
      maxW={{ base: '14rem', xxl: '18rem' }}
      justifyContent="space-between"
      borderRadius="0.313rem"
      border="1px solid"
      borderColor="gray.1100"
      onSubmit={handleSubmit}
    >
      <Flex alignItems="center">
        <DatePicker
          locale="pt-BR"
          selected={start}
          startDate={start}
          onChange={(date) => setStart(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
          name="start"
          required
          customInput={
            <Input
              maxW="7rem"
              minW="5.25rem"
              variant="solid"
              _placeholder={{
                color: 'gray.1000',
                fontSize: { base: '0.85rem', xxl: '1rem' }
              }}
              fontSize={{ base: '0.85rem', xxl: '1rem' }}
              color="gray.500"
              pl={{ base: '0.25rem', xxl: '0.5rem' }}
              pr="0"
            />
          }
        />
        <Text as="span">-</Text>
        <DatePicker
          locale="pt-BR"
          selected={end}
          startDate={end}
          onChange={(date) => setEnd(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
          name="end"
          required
          customInput={
            <Input
              maxW="7rem"
              minW="5.25rem"
              variant="solid"
              _placeholder={{
                color: 'gray.1000',
                fontSize: { base: '0.85rem', xxl: '1rem' }
              }}
              fontSize={{ base: '0.85rem', xxl: '1rem' }}
              color="gray.500"
              pl={{ base: '0.15rem', xxl: '0.5rem' }}
              pr="0"
            />
          }
        />
      </Flex>

      <Button type="submit" cursor="pointer" bg="white" size="sm" h="2.625rem">
        <SearchIcon
          color="gray.1000"
          w={{ base: 3, xxl: 4 }}
          h={{ base: 3, xxl: 4 }}
        />
      </Button>
    </Flex>
  );
}
