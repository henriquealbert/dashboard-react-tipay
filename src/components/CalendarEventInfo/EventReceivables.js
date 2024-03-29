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
import ModalDetailReceivable from 'components/ModalDetailReceivable';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function EventReceivables({
  data,
  setTransactionID,
  detailData
}) {
  return (
    <Accordion
      allowMultiple
      defaultIndex={[0]}
      borderRadius="0.313rem"
      bg="brand.400"
      maxW="54.688rem"
      border="none"
      mt="1.375rem"
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
            Recebíveis
          </Text>
          <AccordionIcon color="white" w={7} h={7} />
        </AccordionButton>
        <AccordionPanel px={{ base: '1rem', xxl: '1.875rem' }}>
          <Table variant="calendar-receivables" mb="2rem">
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
                      {item?.expected_on
                        ? formatDateTime(item?.expected_on)
                        : ''}
                    </Td>
                    <Td>{formatPrice(item?.amount)}</Td>
                    <Th pr="0" textAlign="right">
                      <ModalDetailReceivable
                        variant="calendar-receivables-btn"
                        setTransactionID={setTransactionID}
                        id={item?.id_transaction}
                        data={detailData}
                        calendar
                      />
                    </Th>
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
