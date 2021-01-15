import { Table, Thead, Tr, Th, Td, Tbody, Box } from '@chakra-ui/react';

import ModalDetailSale from 'components/ModalDetailSale';
import PaginationTable from 'components/PaginationTable';
import { formatStatusColor } from 'utils/formatStatusColor';
import { isBoleto } from 'utils/isBoleto';

export default function TableSales({ data }) {
  return (
    <>
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
                  <Td color={formatStatusColor(item.status)}>{item.status}</Td>
                  <Td>{isBoleto(item.payment)}</Td>
                  <Td pr="0" textAlign="right">
                    <ModalDetailSale data={item} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <PaginationTable />
    </>
  );
}
