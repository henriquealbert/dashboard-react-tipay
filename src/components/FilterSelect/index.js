import { Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useQueryClient } from 'react-query';

export default function FilterSelect({
  setValue,
  pageKey,
  children,
  ...props
}) {
  const queryClient = useQueryClient();
  const isFetching = queryClient.isFetching();

  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    queryClient.removeQueries([pageKey]);
    setInputValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <Select
      maxW={{ xlg: '310px' }}
      h="2.625rem"
      borderRadius="0.313rem"
      border="1px solid"
      borderColor="gray.1100"
      variant="solid"
      _placeholder={{ color: 'gray.1000' }}
      fontSize="1rem"
      value={inputValue}
      onChange={handleChange}
      isDisabled={isFetching ? true : false}
      cursor={isFetching ? 'not-allowed' : 'initial'}
      {...props}
    >
      {children}
    </Select>
  );
}
