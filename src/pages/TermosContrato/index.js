import { Text } from '@chakra-ui/react';
import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';

export default function TermosContrato() {
  return (
    <Layout perfil>
      <Container>
        <PageTitle>Termos e Condições</PageTitle>
        <Text fontSize="1.625rem" color="gray.500">
          Para utilizar os serviços da Tipay, é necessário ler e concordar com
          todos os Termos.
        </Text>
      </Container>
    </Layout>
  );
}
