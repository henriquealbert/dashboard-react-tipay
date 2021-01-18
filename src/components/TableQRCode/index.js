import { Table, Thead, Tr, Th, Td, Tbody, Box } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';
import { CheckTipayIcon, QuestionTipayIcon } from 'styles/icons';

import ModalDetailLinkSale from 'components/ModalDetailLinkSale';

export default function TableQRCode({ data }) {
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
                      <CheckTipayIcon mr="16px" />
                    ) : (
                      <QuestionTipayIcon mr="16px" />
                    )}
                    {item.payment}
                  </Td>
                  <Td pr="0" textAlign="right">
                    <ModalDetailLinkSale data={item} />
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
