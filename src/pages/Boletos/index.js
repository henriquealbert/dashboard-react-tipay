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

export default function Boletos() {
  const { data } = useTransactions('/payment_type=3');

  return (
    <Layout>
      <Container>
        <Flex justifyContent="space-between">
          <InnerMenu pageTitle="Boletos" />
          <Link to="/boletos/gerar-boleto">
            <Button variant="green" alignSelf="flex-end" w="260px" h="3.75rem">
              Gerar Boleto
              <BoletoIcon ml="1rem" w="2.125rem" h="1.563rem" color="white" />
            </Button>
          </Link>
        </Flex>
        <Flex my="2.25rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableSales data={data?.entries} />
      </Container>
    </Layout>
  );
}
