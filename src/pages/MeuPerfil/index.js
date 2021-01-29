import Container from 'components/Container';
import Layout from 'components/Layout';
import MyProfile from 'components/MyProfile';

export default function MeuPerfil() {
  return (
    <Layout perfil>
      <Container>
        <MyProfile />
      </Container>
    </Layout>
  );
}
