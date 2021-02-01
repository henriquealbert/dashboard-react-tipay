import { Table, Thead, Tr, Th, Td, Tbody, Box, Text } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';
import { CheckTipayIcon, ErrorTipayIcon } from 'styles/icons';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function TableTransfers({ data, setPage, page }) {
  return (
    <>
      <Box
        bg="white"
        borderRadius="0.625rem"
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        mb="40px"
        px="2.188rem"
        overflowX="auto"
        h="100%"
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
            {data?.entries.map((item) => {
              return (
                <Tr key={item?.id}>
                  <Td>{item?.id}</Td>
                  <Td>{formatDateTime(item?.transfer_date)}</Td>
                  <Td display="flex" alignItems="center">
                    {statusIcon(item?.status, item?.status_detail)}
                  </Td>
                  <Td fontWeight="semibold" px="0">
                    {formatPrice(item?.amount)}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <PaginationTable setPage={setPage} page={page} data={data} />
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
