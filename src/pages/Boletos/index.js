import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSales from 'components/TableSales';
import ToolsMenu from 'components/ToolsMenu';
import { BoletoIcon } from 'styles/icons';

export default function Boletos() {
  const data = [
    {
      id: 152218268,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      created_at: '15/10/2020 19:11',
      updated_at: '27/05/2020 21:18:52',
      value: 'R$ 300,00',
      status: 'Aprovado',
      payment: 'Boleto',
      operation: 'Autorização'
    },
    {
      id: 152218267,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      created_at: '15/10/2020 19:11',
      updated_at: '27/05/2020 21:18:52',
      value: 'R$ 300,00',
      status: 'Cancelada',
      payment: 'Boleto',
      operation: 'Autorização'
    },
    {
      id: 152218266,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      created_at: '15/10/2020 19:11',
      updated_at: '27/05/2020 21:18:52',
      value: 'R$ 300,00',
      status: 'Pendente',
      payment: 'Boleto',
      operation: 'Autorização'
    }
  ];

  return (
    <Layout>
      <Container>
        <Flex justifyContent="space-between">
          <InnerMenu pageTitle="Boletos" />
          <Link to="/boletos/gerar-boleto">
            <Button variant="green" alignSelf="flex-end" w="260px" h="60px">
              Gerar Boleto
              <BoletoIcon ml="1rem" w="2.125rem" h="1.563rem" color="white" />
            </Button>
          </Link>
        </Flex>
        <Flex my="36px">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableSales data={data} />
      </Container>
    </Layout>
  );
}
