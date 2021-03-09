import {
  Box,
  Text,
  FormControl,
  FormErrorMessage,
  Flex,
  Button,
  Input
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendValidationMessage } from 'api';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Obrigatório.')
});

export default function Recover1({
  setCurrentStep,
  setMessage,
  setEmail,
  ...props
}) {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = async ({ email }) => {
    const res = await sendValidationMessage({
      email: email
    });
    if (res?.error === false) {
      setMessage(res?.message);
      setEmail(email);
      setCurrentStep('2');
    } else {
      setError('email', {
        type: 'manual',
        message: 'Email não encontrado.'
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text
        as="h2"
        fontSize={props.onClose ? '1.5rem' : '2rem'}
        fontWeight="bold"
        color={props.onClose ? 'black' : 'white'}
      >
        Encontre sua conta
      </Text>
      <Text mb="2rem" color="gray.100">
        Insira seu email para recuperar sua conta:
      </Text>
      <Box>
        <FormControl isInvalid={errors.email}>
          <Input
            type="email"
            variant="innerSolid"
            name="email"
            id="email"
            placeholder="Digite seu email"
            ref={register}
          />
          <FormErrorMessage color="red.300">
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <Flex my="2rem">
          {props.onClose ? (
            <Button
              variant="secondary"
              maxH="4rem"
              w="100%"
              mr="2rem"
              onClick={props.onClose}
            >
              Cancelar
            </Button>
          ) : (
            <Button as={Link} to="login" variant="secondary" w="100%" mr="1rem">
              Cancelar
            </Button>
          )}
          <Button
            variant="primary"
            maxH={props.onClose ? '4rem' : ''}
            w="100%"
            type="submit"
            isLoading={isSubmitting}
            loadingText="Enviando..."
          >
            Enviar
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
