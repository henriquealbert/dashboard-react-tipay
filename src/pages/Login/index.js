import { Box, Flex, Img, Text } from '@chakra-ui/react';

import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <Box position="relative">
      <Img
        src="/images/logo.svg"
        alt="Logo Tipay"
        position="absolute"
        top="63px"
        left="116px"
        w="140px"
        h="82px"
      />
      <Flex
        maxH="100vh"
        bg="transparent linear-gradient(180deg, #0A172D 0%, #40474F 100%) 0% 0% no-repeat padding-box"
      >
        <Box>
          <Img
            src="/images/login.png"
            alt="Mulher sorrindo e usando App Tipay"
            h="100%"
            w="100%"
            objectFit="cover"
            objectPosition="right top"
          />
        </Box>
        <Flex
          w="790px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          px="117px"
        >
          <Text
            as="h1"
            color="white"
            fontWeight="bold"
            fontSize="33px"
            mb="50px"
          >
            Bem vindo a Tipay acesse agora
          </Text>
          <LoginForm />
        </Flex>
      </Flex>
    </Box>
  );
}
