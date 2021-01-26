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

import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail com formato inválido.')
    .required('Obrigatório.'),
  password: Yup.string()
    .min(6, 'Senha deve ser maior que 6 caracteres.')
    .required('Obrigatório.')
});

export default function LoginForm() {
  const { handleLogin } = useAuth();

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = ({ email, password }) => {
    handleLogin(email, password);
  };

  return (
    <Box w="100%" as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb="1.5rem" isInvalid={errors.email}>
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

      <FormControl mb="1.5rem" isInvalid={errors.password}>
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
      <Flex justifyContent="flex-end">
        <Link to="/esqueci-minha-senha">
          <Text
            cursor="pointer"
            fontSize="1.25rem"
            fontWeight="semibold"
            color="white"
            textAlign="right"
            as="span"
            _hover={{
              textDecoration: 'underline'
            }}
          >
            Esqueci minha senha
          </Text>
        </Link>
      </Flex>

      <Flex
        direction={{ base: 'column', lg: 'row-reverse' }}
        justifyContent="space-between"
        mt="2.25rem"
      >
        <Button
          variant="primary"
          type="submit"
          isLoading={isSubmitting}
          loadingText="Carregando..."
          w="100%"
        >
          Entrar
        </Button>

        <Button
          as="a"
          cursor="pointer"
          href="https://tipay.app/"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          type="button"
          w="100%"
          mt={{ base: '1.5rem', lg: '0' }}
          mr={{ base: '2rem', lg: '1rem' }}
        >
          Cadastrar grátis
        </Button>
      </Flex>
    </Box>
  );
}
