import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateBankAccount } from 'api';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { formatDocOnBlur } from 'utils/formatDocOnBlur';
import * as Yup from 'yup';

import useBanks from 'hooks/useBanks';

const schema = Yup.object().shape({
  holder_name: Yup.string().required('Obrigatório.'),
  cpf_cnpj: Yup.string().required('Obrigatório.'),
  bank_account_type: Yup.string().required('Obrigatório.'),
  account_number: Yup.string().required('Obrigatório.'),
  bank_agency: Yup.string().required('Obrigatório.'),
  bank_name: Yup.string().required('Obrigatório.')
});

export default function EditBankAccount({ formId, data, setSubmit, onClose }) {
  const { data: banksData } = useBanks();
  const toast = useToast();
  const queryClient = useQueryClient();

  const { register, handleSubmit, errors, setValue, setError } = useForm({
    mode: 'onChange',
    defaultValues: {
      holder_name: data?.holder_name,
      cpf_cnpj: data?.cpf_cnpj,
      bank_account_type: data?.bank_account_type,
      account_number: data?.account_number,
      bank_agency: data?.bank_agency,
      bank_code: data?.bank_code
    },
    resolver: yupResolver(schema)
  });

  const handleBankSelect = (e) => {
    const bank_name = e.target.value.split('-')[1];
    const bank_code = e.target.value.split('-')[0];
    setValue('bank_name', `${bank_code}-${bank_name}`);
    setValue('bank_code', bank_code);
  };

  const onSubmit = async (values) => {
    setSubmit(true);
    const data = await updateBankAccount(values);
    toast({
      title: data?.error ? 'Erro!' : 'Sucesso!',
      description: data?.error
        ? data?.message
        : 'Conta bancária alterada com sucesso!',
      status: data?.error ? 'error' : 'success',
      duration: 9000,
      isClosable: true
    });
    queryClient.refetchQueries('profile');
    setSubmit(false);
    onClose();
  };

  return (
    <Flex
      direction="column"
      as="form"
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box display={{ base: 'block', md: 'flex' }}>
        <FormControl mr={{ md: '2rem' }} isInvalid={errors.holder_name}>
          <FormLabel fontWeight="bold" htmlFor="holder_name">
            Nome/Razão Social:
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="holder_name"
            id="holder_name"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.holder_name && errors.holder_name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.cpf_cnpj}>
          <FormLabel fontWeight="bold" htmlFor="cpf_cnpj">
            CPF/CNPJ
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="cpf_cnpj"
            id="cpf_cnpj"
            ref={register}
            onBlur={(e) => formatDocOnBlur(e, setValue, setError)}
            maxLength="18"
          />
          <FormErrorMessage color="red.300">
            {errors.cpf_cnpj && errors.cpf_cnpj.message}
          </FormErrorMessage>
        </FormControl>
      </Box>

      <Box display={{ base: 'block', md: 'flex' }} mt={{ md: '2rem' }}>
        <FormControl mr={{ md: '2rem' }} isInvalid={errors.bank_account_type}>
          <FormLabel fontWeight="bold" htmlFor="bank_account_type">
            Tipo de Conta
          </FormLabel>
          <Select
            type="text"
            variant="innerSolid"
            name="bank_account_type"
            id="bank_account_type"
            ref={register}
          >
            <option value="1">Conta Corrente</option>
            <option value="2">Conta Poupança</option>
          </Select>
          <FormErrorMessage color="red.300">
            {errors.bank_account_type && errors.bank_account_type.message}
          </FormErrorMessage>
        </FormControl>
        <input
          type="text"
          hidden
          ref={register}
          name="bank_code"
          id="bank_code"
        />

        <FormControl isInvalid={errors.bank_name}>
          <FormLabel fontWeight="bold" htmlFor="bank_name">
            Banco
          </FormLabel>
          <Select
            type="text"
            variant="innerSolid"
            name="bank_name"
            id="bank_name"
            onChange={handleBankSelect}
            ref={register}
            defaultValue={banksData && `${data?.bank_code}-${data?.bank_name}`}
          >
            {banksData &&
              banksData.map((bank) => (
                <option
                  value={`${bank.bank_code}-${bank.bank_name}`}
                  key={bank.id}
                >
                  {bank.bank_code} - {bank.bank_name}
                </option>
              ))}
          </Select>
          <FormErrorMessage color="red.300">
            {errors.bank_name && errors.bank_name.message}
          </FormErrorMessage>
        </FormControl>
      </Box>

      <Box display={{ base: 'block', md: 'flex' }} mt={{ md: '2rem' }}>
        <FormControl mr={{ md: '2rem' }} isInvalid={errors.account_number}>
          <FormLabel fontWeight="bold" htmlFor="account_number">
            Conta
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="account_number"
            id="account_number"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.account_number && errors.account_number.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.bank_agency}>
          <FormLabel fontWeight="bold" htmlFor="bank_agency">
            Agência
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="bank_agency"
            id="bank_agency"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.bank_agency && errors.bank_agency.message}
          </FormErrorMessage>
        </FormControl>
      </Box>
    </Flex>
  );
}
