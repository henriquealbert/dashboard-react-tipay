import Container from 'components/Container';
import Layout from 'components/Layout';
import GerarHeader from 'components/GerarHeader';
import { LinkQRCodeIcon } from 'styles/icons';
import GerarCobrancaInfo from 'components/GerarCobrancaInfo';

export default function GerarCobranca() {
  return (
    <Layout>
      <Container>
        <GerarHeader
          pageTitle="Gerar Cobrança por Link/QR Code"
          breadcrumb="Link/QR code"
          breadcrumbItem="Gerar Cobrança"
          backUrl="/link-qrcode"
          icon={LinkQRCodeIcon}
        />
        <GerarCobrancaInfo />
      </Container>
    </Layout>
  );
}
