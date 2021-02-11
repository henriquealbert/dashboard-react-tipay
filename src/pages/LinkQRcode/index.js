import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LinkQRCodeIcon } from 'styles/icons';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableQRCode from 'components/TableQRCode';
import ToolsMenu from 'components/ToolsMenu';
import ErrorMessage from 'components/ErrorMessage';
import TableSalesSkeleton from 'components/TableSalesSkeleton';

import useLinks from 'hooks/useLinks';
import { useLinkContext } from './LinkContext';

export default function LinkQRcode() {
  const ctx = useLinkContext();

  const {
    data: TABLE_data,
    isError: TABLE_isError,
    error: TABLE_error,
    isLoading: TABLE_isLoading
  } = useLinks(ctx);

  console.log(TABLE_data);

  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xxl: 'space-between' }}
          direction={{ base: 'column', xl: 'row' }}
        >
          <InnerMenu pageTitle="Vendas por Links/QR Code" useContext={ctx} />

          <Flex alignSelf={{ xl: 'center' }} mt={{ base: '1rem', xl: '2rem' }}>
            <Button
              as={Link}
              to="/link-qrcode/gerar-cobranca"
              variant="green"
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              w={{ base: '100%', xxl: '16.25rem' }}
              h={{ base: '3.5rem', xxl: '3.75rem' }}
            >
              Gerar Cobrança
              <LinkQRCodeIcon
                ml="1rem"
                w={{ base: '1.5rem', xxl: '1.813rem' }}
                h={{ base: '1.5rem', xxl: '1.813rem' }}
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
