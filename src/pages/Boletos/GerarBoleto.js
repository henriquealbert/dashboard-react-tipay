import Container from 'components/Container';
import Layout from 'components/Layout';
import GerarBoletoHeader from 'components/GerarBoletoHeader';
import GerarBoletoInfo from 'components/GerarBoletoInfo';

export default function GerarBoleto() {
  return (
    <Layout>
      <Container>
        <GerarBoletoHeader />
        <GerarBoletoInfo />
      </Container>
    </Layout>
  );
}
