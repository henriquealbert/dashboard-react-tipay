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
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Obrigatório.')
});

export default function Recover1({ setCurrentStep, onClose }) {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (values) => {
    console.log(values);
    setCurrentStep('2');
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text as="h2" fontSize="1.5rem" fontWeight="bold" color="black">
        Encontre sua conta
      </Text>
      <Text mb="2rem">Insira seu email para recuperar sua conta:</Text>
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
          <Button
            variant="secondary"
            maxH="4rem"
            w="100%"
            mr="2rem"
            onClick={onClose}
          >
            Cancelar
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
    </Box>
  );
}
