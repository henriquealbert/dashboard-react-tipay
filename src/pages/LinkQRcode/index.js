import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LinkQRCodeIcon } from 'styles/icons';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableQRCode from 'components/TableQRCode';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'pages/ErrorMessage';
import TableSalesSkeleton from 'components/TableSalesSkeleton';

import { useLinks_TABLE } from 'hooks/useLinks';
import { useLinkContext } from './LinkContext';

export default function LinkQRcode() {
  const ctx = useLinkContext();

  const {
    data: TABLE_data,
    isError: TABLE_isError,
    error: TABLE_error,
    isLoading: TABLE_isLoading
  } = useLinks_TABLE(`/per_page=${ctx.per_Page}`, `/${ctx.page}`);

  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xxl: 'space-between' }}
          direction={{ base: 'column', xxl: 'row' }}
        >
          <InnerMenu pageTitle="Vendas por Links/QR Code" useContext={ctx} />

          <Flex alignSelf={{ xxl: 'center' }} mt={{ base: '1rem', xlg: '0' }}>
            <Button
              as={Link}
              to="/link-qrcode/gerar-cobranca"
              variant="green"
              w={{ base: '100%', xlg: '260px' }}
              h="3.75rem"
            >
              Gerar Cobrança
              <LinkQRCodeIcon
                ml="1rem"
                w="1.813rem"
                h="1.813rem"
                color="white"
              />
            </Button>
          </Flex>
        </Flex>

        <Flex mt="1rem">
          <SalesStatus />
        </Flex>

        <ToolsMenu
          tableID="table_qrcode"
          csvFilename="tipay_links_qrcode.csv"
          useContext={ctx}
        />

        {TABLE_isError && <ErrorMessage message={TABLE_error.message} />}
        {TABLE_isLoading && <TableSalesSkeleton />}
        {TABLE_data && (
          <TableQRCode id="table_qrcode" data={TABLE_data} useContext={ctx} />
        )}
      </Container>
    </Layout>
  );
}
