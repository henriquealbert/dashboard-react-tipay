import { Button, Flex } from '@chakra-ui/react';
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
        <Flex justifyContent="space-between">
          <InnerMenu pageTitle="Boletos" />
          <Button variant="green" alignSelf="flex-end" w="260px" h="60px">
            Gerar Boleto
            <BoletoIcon ml="16px" w="34px" h="25px" color="white" />
          </Button>
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
