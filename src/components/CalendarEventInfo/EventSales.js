import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Text,
  AccordionIcon,
  AccordionPanel,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody
} from '@chakra-ui/react';
import ModalDetailSale from 'components/ModalDetailSale';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function EventSales({ data, setTransactionID, detailData }) {
  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      borderRadius="0.313rem"
      bg="brand.300"
      maxW="54.688rem"
      border="none"
    >
      <AccordionItem border="none">
        <AccordionButton p={{ base: '1rem', xxl: '1.875rem' }}>
          <Text
            fontSize="1.125rem"
            color="white"
            fontWeight="semibold"
            textTransform="uppercase"
            flex="1"
            textAlign="left"
          >
            Vendas
          </Text>
          <AccordionIcon color="white" w={7} h={7} />
        </AccordionButton>
        <AccordionPanel px={{ base: '1rem', xxl: '1.875rem' }}>
          <Table variant="calendar-sales" mb="2rem">
            <Thead>
              <Tr>
                <Th>DATA/HORA</Th>
                <Th>VALOR</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr key={item?.id}>
                    <Td>
                      {item?.dt_payment_br
                        ? formatDateTime(item?.dt_payment_br)
                        : ''}
                    </Td>
                    <Td>{formatPrice(item?.value)}</Td>
                    <Td pr="0" textAlign="right">
                      <ModalDetailSale
                        setTransactionID={setTransactionID}
                        id={item?.id}
                        data={detailData}
                        variant="calendar-sales-btn"
                        calendar
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
