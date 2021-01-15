import { Box } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import SalesPercentages from 'components/SalesPercentages';
import SalesStatus from 'components/SalesStatus';
import ToolsMenu from 'components/ToolsMenu';
import TableSales from 'components/TableSales';

export default function Vendas() {
  const data = [
    {
      id: 152218268,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      status: 'Aprovado',
      payment: 'Boleto'
    },
    {
      id: 152218267,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      status: 'Cancelada',
      payment: 'Boleto'
    },
    {
      id: 152218266,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      status: 'Pendente',
      payment: 'Boleto'
    }
  ];
  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Vendas" />
        <Box
          display="grid"
          gridTemplateColumns="minmax(200px, 987px) 1fr"
          gridGap="21px"
          w="100%"
          mt="36px"
        >
          <SalesStatus />
          <SalesPercentages />
        </Box>

        <ToolsMenu />
        <TableSales data={data} />
      </Container>
    </Layout>
  );
}
