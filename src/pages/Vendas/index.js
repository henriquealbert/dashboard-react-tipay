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
      created_at: '15/10/2020 19:11',
      updated_at: '27/05/2020 21:18:52',
      value: 'R$ 120,00',
      finalValue: 'R$ 100,00',
      status: 'Aprovado',
      payment: 'Cartão de Crédito',
      operation: 'Autorização'
    },
    {
      id: 152218267,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      created_at: '15/10/2020 19:11',
      value: 'R$ 270,00',
      finalValue: 'R$ 230,00',
      status: 'Cancelada',
      payment: 'Boleto',
      operation: 'Autorização'
    },
    {
      id: 152218266,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      updated_at: '27/05/2020 21:18:52',
      value: 'R$ 900,00',
      finalValue: 'R$ 890,00',
      status: 'Pendente',
      payment: 'Boleto',
      operation: 'Autorização'
    }
  ];
  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Vendas" />
        <Box
          display="grid"
          gridTemplateColumns="minmax(200px, 987px) 1fr"
          gridGap="1.313rem"
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
