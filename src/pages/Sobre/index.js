import { Flex, Img, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import SocialLinks from 'components/SocialLinks';

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
          <Text color="#707070" fontSize="1.25rem">
            Francisco Rocha, 198 - Batel, Curitiba PR, 80420-130 | Atendemos em
            todo o território nacional.
          </Text>
          <Text color="#707070" fontSize="1rem">
            CNPJ 29.358.571/0001-84 - NB Gestão de Negócios LTDA ©{' '}
            {new Date().getFullYear()}.
          </Text>
          <Text color="#707070" fontSize="1rem">
            Todos os direitos reservados.
          </Text>
          <Flex>
            <SocialLinks />
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
