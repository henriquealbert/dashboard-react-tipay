import Container from 'components/Container';
import Layout from 'components/Layout';
import TableQRCode from 'components/TableQRCode';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'components/ErrorMessage';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import { useLinkContext } from './LinkContext';
import useLinks from 'hooks/useLinks';
import HeaderLinkQRcode from './HeaderLinkQRcode';

export default function LinkQRcode() {
  const ctx = useLinkContext();
  const { data, isError, error, isLoading } = useLinks(ctx);

  return (
    <Layout>
      <Container>
        <HeaderLinkQRcode useContext={ctx} />

        <ToolsMenu
          tableID="table_qrcode"
          csvFilename="tipay_links_qrcode.csv"
          useContext={ctx}
        />

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && <TableQRCode id="table_qrcode" data={data} useContext={ctx} />}
      </Container>
    </Layout>
  );
}
