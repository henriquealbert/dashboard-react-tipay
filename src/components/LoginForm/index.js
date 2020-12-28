import { Box, Button, Flex, FormControl, Input, Text } from '@chakra-ui/react';

export default function LoginForm() {
  return (
    <Box w="100%">
      <FormControl mb="25px">
        <Input
          type="email"
          variant="filled"
          size="lg"
          placeholder="Digite seu email"
        />
      </FormControl>

      <FormControl mb="1rem">
        <Input
          type="password"
          variant="filled"
          size="lg"
          placeholder="Digite sua senha"
        />
      </FormControl>

      <Text
        fontSize="20px"
        fontWeight="semibold"
        color="white"
        textAlign="right"
      >
        Esqueci minha senha
      </Text>

      <Flex justifyContent="space-between" mt="35px">
        <Button variant="secondary" type="button">
          Cadastrar grátis
        </Button>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Flex>
    </Box>
  );
}
