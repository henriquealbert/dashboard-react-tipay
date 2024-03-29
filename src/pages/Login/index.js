import { Box, Flex, Img, Text } from '@chakra-ui/react';

import ImageSlider from 'components/ImageSlider';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <Box position="relative" w="100%">
      <Img
        src="/images/logo.svg"
        alt="Logo Tipay"
        position="absolute"
        top={{ base: '2rem', lg: '2rem' }}
        left={{ base: '2rem', lg: '4rem' }}
        w={{ base: '72px', xl: '120px' }}
      />
      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      >
        <ImageSlider />

        <Flex
          w={{ lg: '50%' }}
          justifyContent="center"
          alignItems="center"
          direction="column"
          px={{ base: '2rem', xl: '4rem', xxl: '7rem' }}
          pt={{ base: '8rem' }}
          pb={{ base: '6rem' }}
          m={{ xl: '0 auto' }}
        >
          <Text
            as="h1"
            color="white"
            fontWeight="bold"
            fontSize="2rem"
            mb="3.125rem"
            textAlign="left"
          >
            Bem vindo a Tipay acesse agora
          </Text>
          <LoginForm />
        </Flex>
      </Flex>
    </Box>
  );
}
