import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateProfileInfo } from 'api';
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { fillCepOnBlur } from 'utils/fillCepOnBlur';
import NumberFormat from 'react-number-format';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  cep: Yup.string().required('Obrigatório.'),
  street: Yup.string().required('Obrigatório.'),
  number: Yup.string().required('Obrigatório.'),
  district: Yup.string().required('Obrigatório.'),
  city: Yup.string().required('Obrigatório.'),
  state: Yup.string().required('Obrigatório.')
});

export default function EditAddress({ formId, data, setSubmit, onClose }) {
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
      cep: data?.cep,
      street: data?.street,
      number: data?.number,
      district: data?.district,
      city: data?.city,
      state: data?.state
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (values) => {
    setSubmit(true);
    const res = await updateProfileInfo(values);
    toast({
      title: res?.error ? 'Erro!' : 'Sucesso!',
      description: res?.message,
      status: res?.error ? 'error' : 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    });
    queryClient.refetchQueries('Profile');
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
        <FormControl
          mr={{ md: '2rem' }}
          mb={{ base: '1rem', md: '' }}
          isInvalid={errors.cep}
        >
          <FormLabel fontWeight="bold" htmlFor="cep">
            CEP
          </FormLabel>
          <Controller
            as={
              <NumberFormat
                customInput={(inputProps) => (
                  <Input
                    {...inputProps}
                    variant="innerSolid"
                    onBlur={(event) => fillCepOnBlur(event, setValue, setError)}
                  />
                )}
                format="#####-###"
                autoComplete="off"
                placeholder="CEP"
              />
            }
            defaultValue={data?.cep}
            name="cep"
            id="cep"
            control={control}
          />

          <FormErrorMessage color="red.300">
            {errors.cep && errors.cep.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          mr={{ md: '2rem' }}
          mb={{ base: '1rem', md: '' }}
          isInvalid={errors.street}
        >
          <FormLabel fontWeight="bold" htmlFor="street">
            Rua
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="street"
            id="street"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.street && errors.street.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          w={{ md: '50%' }}
          mb={{ base: '1rem', md: '' }}
          isInvalid={errors.number}
        >
          <FormLabel fontWeight="bold" htmlFor="number">
            Número
          </FormLabel>
          <Input
            type="number"
            variant="innerSolid"
            name="number"
            id="number"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.number && errors.number.message}
          </FormErrorMessage>
        </FormControl>
      </Box>
      <Box display={{ base: 'block', md: 'flex' }} mt={{ md: '2rem' }}>
        <FormControl
          mr={{ md: '2rem' }}
          mb={{ base: '1rem', md: '' }}
          isInvalid={errors.district}
        >
          <FormLabel fontWeight="bold" htmlFor="district">
            Bairro
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="district"
            id="district"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.district && errors.district.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          mr={{ md: '2rem' }}
          mb={{ base: '1rem', md: '' }}
          isInvalid={errors.city}
        >
          <FormLabel fontWeight="bold" htmlFor="city">
            Cidade
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="city"
            id="city"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.city && errors.city.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl w={{ md: '50%' }} isInvalid={errors.state}>
          <FormLabel fontWeight="bold" htmlFor="state">
            Estado
          </FormLabel>
          <Input
            type="text"
            variant="innerSolid"
            name="state"
            id="state"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.state && errors.state.message}
          </FormErrorMessage>
        </FormControl>
      </Box>
    </Flex>
  );
}
