import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSales from 'components/TableSales';
import ToolsMenu from 'components/ToolsMenu';
import { BoletoIcon } from 'styles/icons';
import useTransactions from 'hooks/useTransactions';
import { transactions } from 'db';

export default function Boletos() {
  // const { data } = useTransactions('/payment_type=3');

  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xxl: 'space-between' }}
          direction={{ base: 'column', xxl: 'row' }}
        >
          <InnerMenu pageTitle="Boletos" />
          <Flex alignSelf={{ xxl: 'center' }} mt={{ base: '1rem', xlg: '0' }}>
            <Button
              as={Link}
              to="/boletos/gerar-boleto"
              variant="green"
              w={{ base: '100%', xlg: '260px' }}
              h="3.75rem"
            >
              Gerar Boleto
              <BoletoIcon ml="1rem" w="2.125rem" h="1.563rem" color="white" />
            </Button>
          </Flex>
        </Flex>
        <Flex my="2.25rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableSales data={transactions?.entries} />
      </Container>
    </Layout>
  );
}
