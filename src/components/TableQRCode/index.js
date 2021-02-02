import { Table, Thead, Tr, Th, Td, Tbody, Box } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';
import { CheckTipayIcon, QuestionTipayIcon } from 'styles/icons';

import ModalDetailLinkSale from 'components/ModalDetailLinkSale';
import { forwardRef, useEffect } from 'react';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

function TableQRCode({ id, data, setPage, setCsv }, ref) {
  useEffect(() => {
    const generateCsv = data?.entries?.map((item) => ({
      Identificação: item?.id,
      Descrição: item?.description,
      Data: formatDateTime(item?.created_at),
      Valor: formatPrice(item?.amount),
      'Pagamento por link': ''
    }));
    setCsv(generateCsv);
  }, [data, setCsv]);

  console.log(data);

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
              <Th>Descrição</Th>
              <Th>Data</Th>
              <Th>Valor</Th>
              <Th>Pagamento por link</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.entries.map((item) => {
              return (
                <Tr key={item?.id}>
                  <Td>{item?.id}</Td>
                  <Td maxW="365px">{item?.description}</Td>
                  <Td>{formatDateTime(item?.created_at)}</Td>
                  <Td>{formatPrice(item?.amount)}</Td>
                  <Td>
                    <TdLimit
                      current_limit={item?.current_limit}
                      limit={item?.limit}
                    />
                  </Td>
                  <Td pr={{ base: '2rem', xlg: '0' }} textAlign="right">
                    <ModalDetailLinkSale data={item} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <PaginationTable data={data} setPage={setPage} />
    </>
  );
}

export default forwardRef(TableQRCode);

const TdLimit = ({ current_limit, limit }) => {
  if (current_limit !== null) {
    if (current_limit === limit) {
      return (
        <>
          <CheckTipayIcon mr="1rem" />
          {current_limit} de {limit}
        </>
      );
    } else if (!current_limit === limit) {
      return (
        <>
          <QuestionTipayIcon mr="1rem" />
          {current_limit} de {limit}
        </>
      );
    }
  } else if (current_limit === null && limit === null) {
    return <CheckTipayIcon mr="1rem" />;
  }
};
