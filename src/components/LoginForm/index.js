import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useAuthContext } from 'hooks/useAuthContext';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail com formato inválido.')
    .required('Obrigatório.'),
  password: Yup.string()
    .min(6, 'Senha deve ser maior que 6 caracteres.')
    .required('Obrigatório.')
});

export default function LoginForm() {
  const { handleLogin } = useAuthContext();

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = ({ email }) => {
    handleLogin(email);
  };

  return (
    <Box w="100%" as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb="25px" isInvalid={errors.email}>
        <Input
          type="email"
          name="email"
          id="email"
          ref={register}
          placeholder="Digite seu email"
          variant="filled"
          size="lg"
        />
        <FormErrorMessage color="red.300">
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mb="1rem" isInvalid={errors.password}>
        <Input
          type="password"
          name="password"
          id="password"
          ref={register}
          placeholder="Digite sua senha"
          variant="filled"
          size="lg"
        />
        <FormErrorMessage color="red.300">
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Text
        fontSize="20px"
        fontWeight="semibold"
        color="white"
        textAlign="right"
        as="span"
      >
        Esqueci minha senha
      </Text>

      <Flex justifyContent="space-between" mt="35px">
        <Button variant="secondary" type="button">
          Cadastrar grátis
        </Button>
        <Button
          variant="primary"
          type="submit"
          isLoading={isSubmitting}
          loadingText="Carregando..."
        >
          Entrar
        </Button>
      </Flex>
    </Box>
  );
}
