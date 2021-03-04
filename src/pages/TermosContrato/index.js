import { Text } from '@chakra-ui/react';
import Container from 'components/Container';
import Contract from 'components/Contract';
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
        <Contract
          title="Contrato de Adesão"
          mt="2rem"
          href="https://api.tipay.app/contrato_adesao.pdf"
        />
        <Contract
          title="Termos e Condições Gerais de Uso da Tipay"
          mt="2rem"
          href="https://tipay.app/termos-e-condicoes-gerais-do-sistema-tipay.html"
        />
        <Contract
          title="Política de Uso"
          my="2rem"
          href="https://tipay.app/politica-de-privacidade.html"
        />
      </Container>
    </Layout>
  );
}
