import { Box, Flex, Img, Text } from '@chakra-ui/react';

import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <Box position="relative">
      <Img
        src="/images/logo.svg"
        alt="Logo Tipay"
        position="absolute"
        top="5%"
        left="5%"
        w="8.75rem"
        h="5.125rem"
      />
      <Box
        display="grid"
        gridTemplateColumns="2fr 1fr"
        bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      >
        <Img
          src="/images/login.png"
          alt="Mulher sorrindo e usando App Tipay"
          h="100%"
          w="100%"
          maxH="100vh"
          objectFit="cover"
          objectPosition="right top"
        />
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          px="7.5rem"
        >
          <Text
            as="h1"
            color="white"
            fontWeight="bold"
            fontSize="2.063rem"
            mb="3.125rem"
          >
            Bem vindo a Tipay acesse agora
          </Text>
          <LoginForm />
        </Flex>
      </Box>
    </Box>
  );
}
