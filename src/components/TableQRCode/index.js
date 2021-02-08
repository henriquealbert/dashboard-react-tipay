import { Table, Thead, Tr, Th, Td, Tbody, Box } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';
import { CheckTipayIcon, QuestionTipayIcon } from 'styles/icons';

import ModalDetailLinkSale from 'components/ModalDetailLinkSale';
import { useEffect } from 'react';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function TableQRCode({ id, data, useContext }) {
  const { setCsv, printRef, setPage } = useContext;

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
        ref={printRef}
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
                    <TdLimit item={item} />
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

      {data?.page_count > 1 && (
        <PaginationTable data={data} setPage={setPage} />
      )}
    </>
  );
}

const TdLimit = ({ item }) => {
  if (!item?.has_limit) {
    return (
      <>
        <QuestionTipayIcon mr="1rem" /> Sem limite
      </>
    );
  }
  if (item?.has_limit) {
    if (item?.current_limit !== 0) {
      return (
        <>
          <QuestionTipayIcon mr="1rem" /> {item?.limit - item?.current_limit} de{' '}
          {item?.limit}
        </>
      );
    } else {
      return (
        <>
          <CheckTipayIcon mr="1rem" /> {item?.limit - item?.current_limit} de{' '}
          {item?.limit}
        </>
      );
    }
  }
  return '';
};
