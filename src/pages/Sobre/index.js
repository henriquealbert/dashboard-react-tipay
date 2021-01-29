import { Flex, Img, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';

export default function Sobre() {
  return (
    <Layout perfil>
      <Container>
        <PageTitle>Sobre</PageTitle>
        <Flex
          boxShadow="0px 3px 6px #00000029"
          borderRadius="10px"
          p={{ base: '2rem', md: '4.5rem' }}
          bg="white"
          mt="2rem"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Img src="/images/logo-black.svg" mb="2.5rem" alt="Logo Tipay" />
          <Text color="#707070" fontSize="1.25rem" fontWeight="bold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </Text>
          <Text fontSize="1rem" textAlign="center" mt="1.5rem">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo
          </Text>
        </Flex>
      </Container>
    </Layout>
  );
}
