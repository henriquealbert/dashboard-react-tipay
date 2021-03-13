import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  useToast,
  FormErrorMessage
} from '@chakra-ui/react';
import NumberFormat from 'react-number-format';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import * as Yup from 'yup';

import { formatDocOnBlur } from 'utils/formatDocOnBlur';
import { fillCepOnBlur } from 'utils/fillCepOnBlur';
import { createBuyer, updateBuyer } from 'api';
import DeleteModal from './DeleteModal';

const schema = Yup.object().shape({
  first_name: Yup.string().required('Obrigatório.'),
  last_name: Yup.string().required('Obrigatório.'),
  taxpayer_id: Yup.string().required('Obrigatório.'),
  email: Yup.string()
    .email('Formato inválido de email.')
    .required('Obrigatório.'),
  postal_code: Yup.string().required('Obrigatório.'),
  street: Yup.string().required('Obrigatório.'),
  number: Yup.string().required('Obrigatório.'),
  complement: Yup.string(),
  neighborhood: Yup.string().required('Obrigatório.'),
  city: Yup.string().required('Obrigatório.'),
  state: Yup.string().required('Obrigatório.')
});

export default function BuyerForm({ padding, onClose, boxShadow, edit, data }) {
  const toast = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    control,
    errors,
    setValue,
    setError
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      first_name: data?.first_name,
      last_name: data?.last_name,
      taxpayer_id: data?.taxpayer_id,
      email: data?.email,
      street: data?.street,
      number: data?.number,
      complement: data?.complement,
      neighborhood: data?.neighborhood,
      city: data?.city,
      state: data?.state,
      postal_code: data?.postal_code
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (values) => {
    if (edit) {
      const res = await updateBuyer(data?.id, values);
      toast({
        title: res?.error ? 'Erro!' : 'Sucesso!',
        description: res?.message,
        status: res?.error ? 'error' : 'success',
        duration: 9000,
        isClosable: true
      });
      queryClient.refetchQueries(['Buyers']);
      onClose();
    } else {
      const res = await createBuyer(values);
      toast({
        title: res?.error ? 'Erro!' : 'Sucesso!',
        description: res?.message,
        status: res?.error ? 'error' : 'success',
        duration: 9000,
        isClosable: true
      });
      queryClient.refetchQueries(['Buyers']);
      onClose();
    }
  };

  return (
    <Box
      p={padding ? padding : { base: '2rem', xlg: '3rem 4.25rem' }}
      boxShadow={boxShadow}
      direction={{ base: 'column', lg: 'row' }}
      borderRadius="0.625rem"
      mt="0.75rem"
      w="100%"
      bg="white"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Box w={{ base: '100%', lg: '50%' }} mr={{ lg: '2rem', xlg: '7rem' }}>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <FormControl mb="1.75rem" isInvalid={errors.first_name}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="first_name"
              >
                Nome
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Primeiro nome do cliente"
                name="first_name"
                id="first_name"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.first_name && errors.first_name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              mb="1.75rem"
              ml={{ base: '0', md: '1rem' }}
              isInvalid={errors.last_name}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="last_name"
              >
                Sobrenome
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Sobrenome do cliente"
                name="last_name"
                id="last_name"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.last_name && errors.last_name.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl mb="1.75rem" isInvalid={errors.taxpayer_id}>
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
              htmlFor="taxpayer_id"
            >
              CPF ou CNPJ
            </FormLabel>
            <Input
              name="taxpayer_id"
              id="taxpayer_id"
              type="text"
              variant="innerSolid"
              maxW="none"
              placeholder="Digite o numero do documento"
              ref={register}
              onBlur={(e) => formatDocOnBlur(e, setValue, setError)}
              maxLength="18"
            />
            <FormErrorMessage color="red.300">
              {errors.taxpayer_id && errors.taxpayer_id.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            mb={{ base: '1.75rem', lg: '0' }}
            isInvalid={errors.email}
          >
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
              htmlFor="email"
            >
              Email
            </FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="innerSolid"
              maxW="none"
              placeholder="Digite o email"
              ref={register}
            />
            <FormErrorMessage color="red.300">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </Box>

        <Box w={{ base: '100%', lg: '50%' }}>
          <Flex direction={{ base: 'column', lg: 'row' }}>
            <FormControl
              mb="1.75rem"
              mr="1.375rem"
              maxW={{ lg: '25%' }}
              isInvalid={errors.postal_code}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="postal_code"
              >
                CEP
              </FormLabel>
              <Controller
                as={
                  <NumberFormat
                    customInput={(inputProps) => (
                      <Input
                        {...inputProps}
                        variant="innerSolid"
                        onBlur={(event) =>
                          fillCepOnBlur(event, setValue, setError)
                        }
                      />
                    )}
                    format="#####-###"
                    autoComplete="off"
                    placeholder="CEP"
                  />
                }
                defaultValue=""
                name="postal_code"
                id="postal_code"
                control={control}
              />
              <FormErrorMessage color="red.300">
                {errors.postal_code && errors.postal_code.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mb="1.75rem" isInvalid={errors.street}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="street"
              >
                Endereço
              </FormLabel>
              <Input
                name="street"
                id="street"
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Nome da Rua"
                w="100%"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.street && errors.street.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={{ base: 'column', lg: 'row' }}>
            <FormControl
              mb="1.75rem"
              mr="1.375rem"
              maxW={{ lg: '25%' }}
              isInvalid={errors.number}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="number"
              >
                Número
              </FormLabel>
              <Input
                name="number"
                id="number"
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Nº"
                w="100%"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.number && errors.number.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              mb="1.75rem"
              mr="1.375rem"
              maxW={{ lg: '50%' }}
              isInvalid={errors.city}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="city"
              >
                Cidade
              </FormLabel>
              <Input
                id="city"
                name="city"
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Cidade"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.city && errors.city.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              maxW={{ lg: '50%' }}
              mb={{ base: '1.75rem', lg: '0' }}
              isInvalid={errors.state}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="state"
              >
                Estado
              </FormLabel>
              <Input
                name="state"
                id="state"
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Estado"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.state && errors.state.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={{ base: 'column', lg: 'row' }}>
            <FormControl
              mb="1.75rem"
              mr="1.375rem"
              maxW={{ lg: '50%' }}
              isInvalid={errors.neighborhood}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="neighborhood"
              >
                Bairro
              </FormLabel>
              <Input
                name="neighborhood"
                id="neighborhood"
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Bairro"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.neighborhood && errors.neighborhood.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl maxW={{ lg: '50%' }} isInvalid={errors.complement}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="complement"
              >
                Complemento
              </FormLabel>
              <Input
                name="complement"
                id="complement"
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Complemento"
                ref={register}
              />
              <FormErrorMessage color="red.300">
                {errors.complement && errors.complement.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </Box>
      </Flex>

      <Flex mt="2.625rem" justifyContent="flex-end">
        <Button
          variant={edit ? 'black' : 'red'}
          mr="1.375rem"
          h="4.5rem"
          w="13.75rem"
          onClick={onClose}
        >
          {edit ? 'Fechar' : 'Cancelar'}
        </Button>

        {edit ? (
          <>
            <DeleteModal closeDetailModal={onClose} id={data?.id} />
            <Button
              variant="green"
              h="4.5rem"
              isLoading={false}
              loadingText="Carregando..."
              type="submit"
              ml="1.375rem"
            >
              Editar Cliente
            </Button>
          </>
        ) : (
          <Button
            variant="green"
            w="21rem"
            h="4.5rem"
            isLoading={false}
            loadingText="Carregando..."
            type="submit"
          >
            Cadastrar Cliente
          </Button>
        )}
      </Flex>
    </Box>
  );
}
