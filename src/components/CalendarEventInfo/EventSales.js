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
  Tbody,
  Button
} from '@chakra-ui/react';
import { formatDateTime } from 'utils/formatDate';

export default function EventSales({ data }) {
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
        <AccordionButton p="30px">
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
        <AccordionPanel px="30px">
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
                    <Td>{item?.date ? formatDateTime(item?.date) : ''}</Td>
                    <Td>{item?.title}</Td>
                    <Td pr="0" textAlign="right">
                      <Button variant="calendar-sales-btn">Detalhes</Button>
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
