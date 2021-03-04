import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendMessageSupport } from 'api';
import { useForm, Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Obrigatório.'),
  email: Yup.string()
    .email('E-mail com formato inválido.')
    .required('Obrigatório.'),
  phone: Yup.string().required('Obrigatório.'),
  message: Yup.string().required('Obrigatório.')
});

export default function FormAtendimento() {
  const {
    register,
    handleSubmit,
    errors,
    control,
    reset,
    setValue,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  const toast = useToast();

  const onSubmit = async (lead) => {
    const data = await sendMessageSupport({ lead });

    toast({
      title: data.error ? 'Erro!' : 'Sucesso!',
      description: data.message,
      status: data.error ? 'error' : 'success',
      duration: 9000,
      isClosable: true
    });
    setValue('phone', '');
    reset();
  };

  return (
    <Box
      mt={{ base: '4rem', md: '0' }}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl mb="1.375rem" isInvalid={errors.name}>
        <FormLabel
          fontSize="1.125rem"
          color="gray.500"
          fontWeight="bold"
          textTransform="uppercase"
          htmlFor="name"
        >
          Seu Nome
        </FormLabel>
        <Input
          variant="innerSolid"
          type="text"
          name="name"
          id="name"
          placeholder="Seu nome completo aqui"
          ref={register}
        />
        <FormErrorMessage color="red.300">
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mb="1.375rem" isInvalid={errors.email}>
        <FormLabel
          fontSize="1.125rem"
          color="gray.500"
          fontWeight="bold"
          textTransform="uppercase"
          htmlFor="email"
        >
          Email
        </FormLabel>
        <Input
          variant="innerSolid"
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          ref={register}
        />
        <FormErrorMessage color="red.300">
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mb="1.375rem" isInvalid={errors.phone}>
        <FormLabel
          fontSize="1.125rem"
          color="gray.500"
          fontWeight="bold"
          textTransform="uppercase"
          htmlFor="phone"
        >
          Telefone
        </FormLabel>
        <Controller
          as={
            <NumberFormat
              customInput={(inputProps) => (
                <Input {...inputProps} variant="innerSolid" />
              )}
              format="(##) ####-#####"
              autoComplete="off"
              placeholder="Com DDD"
            />
          }
          name="phone"
          control={control}
          defaultValue=""
        />
        <FormErrorMessage color="red.300">
          {errors.phone && errors.phone.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mb="1.375rem" isInvalid={errors.message}>
        <FormLabel
          fontSize="1.125rem"
          color="gray.500"
          fontWeight="bold"
          textTransform="uppercase"
          htmlFor="message"
        >
          Mensagem
        </FormLabel>
        <Textarea
          variant="filled"
          name="message"
          id="message"
          placeholder="Digite aqui sua mensagem"
          rows="4"
          ref={register}
        />
        <FormErrorMessage color="red.300">
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        variant="green"
        w="100%"
        type="submit"
        isLoading={isSubmitting}
        loadingText="Enviando..."
      >
        Enviar
      </Button>
    </Box>
  );
}
