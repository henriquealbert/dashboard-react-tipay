import {
  Box,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  Flex,
  Button,
  FormLabel,
  PinInput,
  PinInputField,
  HStack
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Obrigatório.')
});

export default function Recover2({ setCurrentStep }) {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onChange'
    // resolver: yupResolver(schema)
  });

  const onSubmit = async (values) => {
    console.log(values);
    setCurrentStep('2');
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text as="h2" fontSize="1.5rem" fontWeight="bold" color="black" mb="1rem">
        Redefinir senha
      </Text>
      <Text as="h3" fontSize="1.125rem" fontWeight="semibold" mb="0.5rem">
        Foi enviado um sms para o número: (xx) xxxx-6328
      </Text>
      <Text fontSize="1rem" mb="2rem">
        Insira o código de segurança, seu email e uma nova senha para redefinir
        seu acesso:
      </Text>
      <Box my="3rem">
        <Flex mb="1.5rem">
          <FormControl isInvalid={errors.validation_code} mr="2rem">
            <FormLabel fontWeight="bold" htmlFor="validation_code">
              Código de segurança:
            </FormLabel>
            <HStack>
              <PinInput
                autoComplete="off"
                size="lg"
                variant="filled"
                name="validation_code"
                id="validation_code"
                ref={register}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
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
          loadingText="Enviando..."
        >
          Enviar
        </Button>
      </Flex>
    </Box>
  );
}
