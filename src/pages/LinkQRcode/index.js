import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableQRCode from 'components/TableQRCode';
import ToolsMenu from 'components/ToolsMenu';
import { LinkQRCodeIcon } from 'styles/icons';

export default function LinkQRcode() {
  const data = [
    {
      id: 152218268,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      payment: '10 de 10',
      check: true,
      status: 'Aprovado',
      updated_at: '27/05/2020 21:18:52',
      created_at: '15/10/2020 19:11',
      operation: 'Autorização',
      url: 'https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa',
      active_url: true
    },
    {
      id: 152218267,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      payment: '10 de 20',
      check: false,
      status: 'Pendente',
      updated_at: '27/05/2020 21:18:52',
      created_at: '15/10/2020 19:11',
      operation: 'Autorização',
      url: 'https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa',
      active_url: false
    },
    {
      id: 152218266,
      payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
      date: '15/10/2020 19:11',
      value: 'R$ 300,00',
      payment: '1 de 1',
      check: false,
      status: 'Cancelada',
      updated_at: '27/05/2020 21:18:52',
      created_at: '15/10/2020 19:11',
      operation: 'Autorização',
      url: 'https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa',
      active_url: false
    }
  ];
  return (
    <Layout>
      <Container>
        <Flex justifyContent="space-between">
          <InnerMenu pageTitle="Vendas por Links/QR Code" />
          <Link to="/link-qrcode/gerar-cobranca">
            <Button variant="green" alignSelf="flex-end" w="260px" h="60px">
              Gerar Cobrança
              <LinkQRCodeIcon ml="16px" w="29px" h="29px" color="white" />
            </Button>
          </Link>
        </Flex>
        <Flex my="36px">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        <TableQRCode data={data} />
      </Container>
    </Layout>
  );
}
