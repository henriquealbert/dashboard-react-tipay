import Container from 'components/Container';
import Layout from 'components/Layout';
import MyProfile from 'components/MyProfile';
import { useProfile } from 'hooks/useProfile';

export default function MeuPerfil() {
  const { data } = useProfile();
  console.log(data);

  return (
    <Layout perfil>
      <Container>
        <MyProfile profileData={data} />
      </Container>
    </Layout>
  );
}
