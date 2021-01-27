import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableQRCode from 'components/TableQRCode';
import ToolsMenu from 'components/ToolsMenu';
import { LinkQRCodeIcon } from 'styles/icons';
import { link } from 'db';

export default function LinkQRcode() {
  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xxl: 'space-between' }}
          direction={{ base: 'column', xxl: 'row' }}
        >
          <InnerMenu pageTitle="Vendas por Links/QR Code" />
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
        <ToolsMenu />
        <TableQRCode data={link} />
      </Container>
    </Layout>
  );
}
