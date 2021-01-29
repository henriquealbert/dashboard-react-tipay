import { Text } from '@chakra-ui/react';
import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';

export default function ClientesAmigos() {
  return (
    <Layout perfil>
      <Container>
        <PageTitle>Clientes/Amigos</PageTitle>
        <Text fontSize="1.625rem" color="gray.500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
      </Container>
    </Layout>
  );
}
