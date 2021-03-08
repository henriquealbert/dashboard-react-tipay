import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { buyersFilteredList } from 'api';
import { formatDoc } from 'utils/formatDoc';
import { validEmail } from 'utils/isValidEmail';

export default function InputFilter({ setFilteredList }) {
  const { register, errors, setError, setValue, handleSubmit } = useForm();

  const onSubmit = async ({ filteredOption, searchTerm }) => {
    setFilteredList({ entries: [] });
    if (filteredOption === 'name') {
      const data = await buyersFilteredList(filteredOption, searchTerm);
      if (!data?.error) {
        setFilteredList(data);
      }
    }

    if (filteredOption === 'taxpayer_id') {
      const formattedTaxpayer_id = formatDoc(searchTerm, setError);
      setValue('searchTerm', formattedTaxpayer_id);
      const data = await buyersFilteredList(
        filteredOption,
        formattedTaxpayer_id
      );
      if (!data?.error) {
        setFilteredList(data);
      }
    }

    if (filteredOption === 'email') {
      if (validEmail(searchTerm, setError)) {
        const data = await buyersFilteredList(filteredOption, searchTerm);
        if (!data?.error) {
          setFilteredList(data);
        }
      }
    }
  };

  return (
    <Flex as="form" w="100%" mr="1.375rem" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.filteredOption} maxW="11rem">
        <Select
          variant="outline"
          h="4.563rem"
          maxW="11rem"
          placeholder="Filtrar por..."
          fontSize="1.125rem"
          name="filteredOption"
          id="filteredOption"
          ref={register}
          required
        >
          <option value="name">Nome</option>
          <option value="taxpayer_id">CNPJ/CPF</option>
          <option value="email">Email</option>
        </Select>
        <FormErrorMessage color="red.300">
          {errors.filteredOption && errors.filteredOption.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.searchTerm} w="100%">
        <InputGroup mb={{ base: '1.75rem', md: '0' }} w="100%">
          <Input
            type="text"
            variant="innerSolid"
            placeholder="Digite o CPF, CNPJ ou nome do cliente"
            w="100%"
            maxW="none"
            name="searchTerm"
            id="searchTerm"
            autoComplete="off"
            ref={register}
            required
          />
          <InputRightElement
            as="button"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
            px="1.875rem"
            type="submit"
          >
            <SearchIcon w="1.438rem" h="1.438rem" color="#AFAFAF" />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage color="red.300">
          {errors.searchTerm && errors.searchTerm.message}
        </FormErrorMessage>
      </FormControl>
    </Flex>
  );
}
