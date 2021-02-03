import { forwardRef, useEffect } from 'react';
import { Table, Thead, Tr, Th, Td, Tbody, Box } from '@chakra-ui/react';

import ModalDetailSale from 'components/ModalDetailSale';
import PaginationTable from 'components/PaginationTable';
import { formatDateTime } from 'utils/formatDate';
import { formatStatusColor, formatStatusLabel } from 'utils/formatStatusColor';
import {
  formatPaymentType,
  formatPaymentTypeString
} from 'utils/formatPaymentType';
import { formatPrice } from 'utils/formatPrice';

function TableSales({ id, data, setPage, setCsv }, ref) {
  useEffect(() => {
    const generateCsv = data?.entries.map((item) => ({
      Identificação: item?.id,
      Pagador: item?.holder_name,
      Data: formatDateTime(item?.dt_payment_br),
      Valor: formatPrice(item?.value),
      Status: formatStatusLabel(item?.status),
      Pagamento: formatPaymentTypeString(item?.payment_type)
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
              <Th>Pagador</Th>
              <Th>Data</Th>
              <Th>Valor</Th>
              <Th>Status</Th>
              <Th>Pagamento</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.entries.map((item) => {
              return (
                <Tr key={item?.id}>
                  <Td>{item?.id}</Td>
                  <Td maxW="365px">{item?.holder_name}</Td>
                  <Td>{formatDateTime(item?.dt_payment_br)}</Td>
                  <Td>{formatPrice(item?.value)}</Td>
                  <Td color={formatStatusColor(item?.status)}>
                    {formatStatusLabel(item?.status)}
                  </Td>
                  <Td>{formatPaymentType(item?.payment_type)}</Td>
                  <Td pr={{ base: '2rem', xlg: '0' }} textAlign="right">
                    <ModalDetailSale data={item} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      {data?.page_count > 1 && (
        <PaginationTable data={data} setPage={setPage} />
      )}
    </>
  );
}

export default forwardRef(TableSales);
