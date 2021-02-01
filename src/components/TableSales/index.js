import { Table, Thead, Tr, Th, Td, Tbody, Box } from '@chakra-ui/react';

import ModalDetailSale from 'components/ModalDetailSale';
import PaginationTable from 'components/PaginationTable';
import { formatDateTime } from 'utils/formatDate';
import { formatStatusColor, formatStatusLabel } from 'utils/formatStatusColor';
import { formatPaymentType } from 'utils/formatPaymentType';
import { formatPrice } from 'utils/formatPrice';

export default function TableSales({ data }) {
  console.log(data);
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
      <PaginationTable data={data} />
    </>
  );
}
