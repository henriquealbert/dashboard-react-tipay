import { Table, Thead, Tr, Th, Td, Tbody, Box, Text } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';
import { forwardRef, useEffect } from 'react';
import { CheckTipayIcon, ErrorTipayIcon } from 'styles/icons';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

function TableTransfers({ id, data, setPage, setCsv }, ref) {
  useEffect(() => {
    const generateCsv = data?.entries.map((item) => ({
      Identificação: item?.id,
      Data: formatDateTime(item?.transfer_date),
      Status: statusText(item?.status, item?.status_detail),
      Valor: formatPrice(item?.amount)
    }));
    setCsv(generateCsv);
  }, [data, setCsv]);

  return (
    <>
      <Box
        id={id}
        bg="white"
        borderRadius="0.625rem"
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        mb="40px"
        px="2.188rem"
        overflowX="auto"
        h="100%"
        ref={ref}
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
      <PaginationTable setPage={setPage} data={data} />
    </>
  );
}

export default forwardRef(TableTransfers);

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

const statusText = (status, status_detail) => {
  switch (status) {
    case 0:
      return 'Transferência Recusada.';

    case 1:
      return status_detail;
  }
};
