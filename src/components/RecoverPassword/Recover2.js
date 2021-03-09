import {
  Box,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  Flex,
  Button,
  FormLabel,
  useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassword } from 'api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import * as Yup from 'yup';

import ValidationCode from './ValidationCode';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Obrigatório.'),
  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres.')
    .required('Obrigatório.'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Senhas não conferem.')
    .required('Obrigatório.')
});

export default function Recover2({ setCurrentStep, message, email, onClose }) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const history = useHistory();
  const [pinValue, setPinValue] = useState('');

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      validation_code: '',
      email: email,
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async ({ email, password }) => {
    const res = await resetPassword({
      email,
      password,
      validation_code: pinValue
    });
    if (res?.error === false) {
      toast({
        title: 'Sucesso!',
        description: res?.message,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
      queryClient.removeQueries('profile');
      if (onClose) {
        onClose();
      } else {
        history.push('/login');
      }
    } else {
      toast({
        title: 'Erro!',
        description: res?.message,
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text
        as="h2"
        fontSize={onClose ? '1.5rem' : '2rem'}
        fontWeight="bold"
        color={onClose ? 'black' : 'white'}
        mb="1rem"
      >
        Redefinir senha
      </Text>
      <Text
        as="h3"
        fontSize="1.125rem"
        color="gray.100"
        fontWeight="semibold"
        mb="0.5rem"
      >
        {message}
      </Text>
      <Text fontSize="1rem" mb="2rem" color="gray.100">
        Insira o código de segurança, seu email e uma nova senha para redefinir
        seu acesso:
      </Text>
      <Box my="3rem">
        <Flex mb="1.5rem">
          <FormControl isInvalid={errors.validation_code} mr="2rem">
            <FormLabel fontWeight="bold" htmlFor="validation_code">
              Código de segurança:
            </FormLabel>
            <ValidationCode
              setPinValue={setPinValue}
              pinValue={pinValue}
              name="validation_code"
              id="validation_code"
            />
            <FormErrorMessage color="red.300">
              {errors.validation_code && errors.validation_code.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel fontWeight="bold" htmlFor="email">
              Email:
            </FormLabel>
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
        </Flex>

        <Flex>
          <FormControl isInvalid={errors.password} mr="2rem">
            <FormLabel fontWeight="bold" htmlFor="password">
              Nova senha:
            </FormLabel>
            <Input
              type="password"
              variant="innerSolid"
              name="password"
              id="password"
              placeholder="Digite sua nova senha"
              ref={register}
            />
            <FormErrorMessage color="red.300">
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.confirm_password}>
            <FormLabel fontWeight="bold" htmlFor="confirm_password">
              Confirmar senha:
            </FormLabel>
            <Input
              type="password"
              variant="innerSolid"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirme sua nova senha"
              ref={register}
            />
            <FormErrorMessage color="red.300">
              {errors.confirm_password && errors.confirm_password.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>
      </Box>

      <Flex my="2rem">
        <Button
          variant="secondary"
          maxH="4rem"
          w="100%"
          mr="2rem"
          onClick={() => setCurrentStep('1')}
        >
          Voltar
        </Button>
        <Button
          variant="primary"
          maxH="4rem"
          w="100%"
          type="submit"
          isLoading={isSubmitting}
          loadingText="Carregando..."
        >
          Alterar senha
        </Button>
      </Flex>
    </Box>
  );
}
