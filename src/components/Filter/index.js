import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { useQueryClient } from 'react-query';

export default function Filter({ placeholder, type, maxW, setValue, pageKey }) {
  const queryClient = useQueryClient();

  const [inputValue] = useState();

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const onClick = () => {
    queryClient.removeQueries([pageKey]);
    setValue(inputValue);
  };

  /// estou fazendo o clearFIlters

  return (
    <InputGroup
      as="form"
      maxW={maxW}
      w="100%"
      borderRadius="0.313rem"
      border="1px solid"
      borderColor="gray.1100"
      onSubmit={(e) => {
        e.preventDefault();

        console.log(e.target);
      }}
    >
      <Input
        type={type}
        name={placeholder}
        variant="solid"
        _placeholder={{ color: 'gray.1000' }}
        fontSize="1rem"
        color="gray.500"
        placeholder={placeholder}
      />

      <InputRightElement
        as="button"
        type="submit"
        cursor="pointer"
        onClick={onClick}
      >
        <SearchIcon color="gray.1000" w={4} h={4} />
      </InputRightElement>
    </InputGroup>
  );
}
