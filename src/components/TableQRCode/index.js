import { Table, Thead, Tr, Th, Td, Tbody, Box } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';
import { CheckTipayIcon, QuestionTipayIcon } from 'styles/icons';

import ModalDetailLinkSale from 'components/ModalDetailLinkSale';
import { forwardRef, useEffect } from 'react';

function TableQRCode({ id, data, setPage, setCsv }, ref) {
  useEffect(() => {
    // const generateCsv = data?.entries?.map((item) => ({
    //   Identificação: item?.id,
    //   Pagador: item?.holder_name,
    //   Data: 'formatDateTime(item?.dt_payment_br)',
    //   Valor: 'formatPrice(item?.value)',
    //   'Pagamento por link': ''
    // }));
    setCsv('generateCsv');
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
              <Th>Pagamento por link</Th>
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
                  <Td>
                    {item.check ? (
                      <CheckTipayIcon mr="1rem" />
                    ) : (
                      <QuestionTipayIcon mr="1rem" />
                    )}
                    {item.payment}
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
