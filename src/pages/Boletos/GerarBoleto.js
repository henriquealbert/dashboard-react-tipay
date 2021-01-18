import Container from 'components/Container';
import Layout from 'components/Layout';
import GerarHeader from 'components/GerarHeader';
import GerarBoletoInfo from 'components/GerarBoletoInfo';
import { BoletosIcon } from 'styles/icons';

export default function GerarBoleto() {
  return (
    <Layout>
      <Container>
        <GerarHeader
          pageTitle="Gerar Boleto"
          breadcrumb="Boletos"
          breadcrumbItem="Gerar Boleto"
          backUrl="/boletos"
          icon={BoletosIcon}
        />
        <GerarBoletoInfo />
      </Container>
    </Layout>
  );
}
