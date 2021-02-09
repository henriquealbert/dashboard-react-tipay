import { Button, Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { useQueryClient } from 'react-query';
import { forwardRef } from 'react';

function Filter({ placeholder, type, minW, maxW, setValue, pageKey, m }, ref) {
  const queryClient = useQueryClient();
  const isFetching = queryClient.isFetching();

  const handleClick = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData);
    const value = Object.values(obj)[0];

    queryClient.removeQueries([pageKey]);
    setValue(value);
  };

  return (
    <Flex
      as="form"
      minW={minW}
      w="100%"
      maxW={maxW}
      borderRadius="0.313rem"
      border="1px solid"
      borderColor="gray.1100"
      onSubmit={handleClick}
      cursor={isFetching ? 'not-allowed' : 'initial'}
      ref={ref}
      m={m}
    >
      <Input
        type={type}
        name={placeholder}
        variant="solid"
        _placeholder={{ color: 'gray.1000' }}
        fontSize="1rem"
        color="gray.500"
        padding={{ base: '0 0 0 0.75rem', xxl: '1rem' }}
        placeholder={placeholder}
        isDisabled={isFetching ? true : false}
      />

      <Button
        type="submit"
        cursor="pointer"
        bg="white"
        size="sm"
        h="2.625rem"
        isDisabled={isFetching ? true : false}
      >
        <SearchIcon
          color="gray.1000"
          w={{ base: 3, xxl: 4 }}
          h={{ base: 3, xxl: 4 }}
        />
      </Button>
    </Flex>
  );
}

export default forwardRef(Filter);
