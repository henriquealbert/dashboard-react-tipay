import { Table, Thead, Tr, Th, Td, Tbody, Box, Button } from '@chakra-ui/react';
import { BoletoIcon } from 'styles/icons';

export default function SalesTable({ boleto }) {
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
    <Box
      bg="white"
      borderRadius="10px"
      boxShadow="0px 3px 10px #0000000A"
      mb="40px"
      px="35px"
    >
      <Table variant="sales" size="lg">
        <Thead>
          <Tr>
            <Th>Identificação</Th>
            <Th>Pagador</Th>
            <Th>Data</Th>
            <Th>Valor</Th>
            <Th>Status</Th>
            <Th>Pagamento</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => {
            return (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td maxW="365px">{item.payer}</Td>
                <Td>{item.date}</Td>
                <Td>{item.value}</Td>
                <Td color={statusColor(item.status)}>{item.status}</Td>
                <Td>
                  {item.payment}
                  {boleto ? (
                    <BoletoIcon ml="16px" w="25px" h="18px" color="gray.800" />
                  ) : (
                    ''
                  )}
                </Td>
                <Td pr="0" textAlign="right">
                  <Button variant="green" maxW="150px" h="50px">
                    Detalhes
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

const statusColor = (status) => {
  switch (status) {
    case 'Aprovado':
      return '#05BE5B';

    case 'Cancelada':
      return '#FF4E7E';

    case 'Pendente':
      return '#FEAE1A';
  }
};
