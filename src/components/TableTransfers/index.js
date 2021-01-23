import { Table, Thead, Tr, Th, Td, Tbody, Box, Text } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';
import { CheckTipayIcon, ErrorTipayIcon } from 'styles/icons';
import { formatDateTime } from 'utils/formatDate';

export default function TableTransfers({ data }) {
  return (
    <>
      <Box
        bg="white"
        borderRadius="10px"
        boxShadow="0rem 0.188rem 10px #0000000A"
        mb="40px"
        px="35px"
      >
        <Table variant="sales" size="lg">
          <Thead>
            <Tr>
              <Th>Identificação</Th>
              <Th>Data</Th>
              <Th>Status</Th>
              <Th>Valor</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{formatDateTime(item.transfer_date)}</Td>
                  <Td display="flex" alignItems="center">
                    {statusIcon(item.status, item.status_detail)}
                  </Td>
                  <Td fontWeight="semibold" px="0">
                    {item.amount}
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

const statusIcon = (status, status_detail) => {
  switch (status) {
    case 0:
      return (
        <>
          <ErrorTipayIcon mr="1rem" />
          <Text display="inline" as="span">
            Transferência Recusada.
          </Text>
        </>
      );

    case 1:
      return (
        <>
          <CheckTipayIcon mr="1rem" />
          <Text display="inline" as="span">
            {status_detail}
          </Text>
        </>
      );
  }
};
