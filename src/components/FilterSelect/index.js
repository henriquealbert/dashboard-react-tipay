import { Select } from '@chakra-ui/react';
import { useQueryClient } from 'react-query';

export default function FilterSelect({
  value,
  setValue,
  pageKey,
  maxW,
  children,
  ...props
}) {
  const queryClient = useQueryClient();
  const isFetching = queryClient.isFetching();

  const handleChange = (event) => {
    queryClient.removeQueries([pageKey]);
    setValue(event.target.value);
  };

  return (
    <Select
      maxW={maxW}
      h="2.625rem"
      borderRadius="0.313rem"
      border="1px solid"
      borderColor="gray.1100"
      variant="solid"
      _placeholder={{ color: 'gray.1000' }}
      fontSize="1rem"
      value={value}
      onChange={handleChange}
      isDisabled={isFetching ? true : false}
      cursor={isFetching ? 'not-allowed' : 'initial'}
      {...props}
    >
      {children}
    </Select>
  );
}
