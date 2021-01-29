import { Box } from '@chakra-ui/react';

import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import SendDocument from 'components/SendDocument';

export default function Documentos() {
  return (
    <Layout perfil>
      <Container>
        <PageTitle>Documentos</PageTitle>

        <Box
          boxShadow="0px 3px 10px #0000000A"
          bg="white"
          borderRadius="10px"
          p="1rem 3.625rem"
          mt="2rem"
          mb="4rem"
        >
          <SendDocument
            title="RG, CNH ou cartão CNPJ"
            description="Envie uma foto do se Envie uma foto do seu envie uma foto do seu Envie uma foto do seu"
            docType="rg"
          />
          <SendDocument
            title="Selfie"
            description="Envie uma foto do se Envie uma foto do seu envie uma foto do seu Envie uma foto do seu"
            docType="selfie"
          />
          <SendDocument
            title="Comprovante de residência"
            description="Envie uma foto do se Envie uma foto do seu envie uma foto do seu Envie uma foto do seu"
            docType="residencia"
          />
          <SendDocument
            title="Comprovante de atividade"
            description="Envie uma foto do se Envie uma foto do seu envie uma foto do seu Envie uma foto do seu"
            docType="atividade"
            noBorder
          />
        </Box>
      </Container>
    </Layout>
  );
}
