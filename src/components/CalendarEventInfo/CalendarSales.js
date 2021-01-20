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

export default function CalendarSales() {
  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      borderRadius="5px"
      bg="brand.300"
      maxW="575px"
      border="none"
    >
      <AccordionItem border="none">
        <AccordionButton p="30px">
          <Text
            fontSize="18px"
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
          <Table variant="calendar-sales" mb="32px">
            <Thead>
              <Tr>
                <Th>DATA/HORA</Th>
                <Th>VALOR</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>15/10/2020 - 16:11:41</Td>
                <Td>R$ 300,00</Td>
                <Th pr="0" textAlign="right">
                  <Button variant="calendar-sales-btn">Detalhes</Button>
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
