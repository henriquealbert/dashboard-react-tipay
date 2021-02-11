import { Skeleton } from '@chakra-ui/skeleton';
import Container from 'components/Container';
import ErrorMessage from 'components/ErrorMessage';
import Layout from 'components/Layout';
import MyProfile from 'components/MyProfile';
import useProfile from 'hooks/useProfile';

export default function MeuPerfil() {
  const { data, isError, error, isLoading } = useProfile();

  return (
    <Layout perfil>
      <Container>
        {data && <MyProfile data={data} />}
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
