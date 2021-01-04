import Layout from 'components/Layout';
import Container from 'components/Container';
import HomeInnerMenu from 'components/InnerMenu/HomeInnerMenu';
import SalesStatus from 'components/SalesStatus';

export default function Home() {
  return (
    <Layout>
      <Container>
        <HomeInnerMenu />
        <SalesStatus />
      </Container>
    </Layout>
  );
}
