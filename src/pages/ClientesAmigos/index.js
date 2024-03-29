import { Skeleton } from '@chakra-ui/react';
import Container from 'components/Container';
import ErrorMessage from 'components/ErrorMessage';
import Friends from 'components/Friends';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import useBuyers from 'hooks/useBuyers';

export default function ClientesAmigos() {
  const { data, isError, error, isLoading } = useBuyers(1);

  return (
    <Layout perfil>
      <Container>
        <PageTitle>Clientes/Amigos</PageTitle>

        {data && <Friends initialData={data} />}
        {isError && <ErrorMessage message={error.message} />}
        {isLoading && (
          <Skeleton
            h="70vh"
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
          />
        )}
      </Container>
    </Layout>
  );
}
