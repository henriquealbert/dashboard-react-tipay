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

export default function EventReceivables({ data }) {
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
        <AccordionButton p="1.875rem">
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
        <AccordionPanel px="1.875rem">
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
                    <Td>{item?.date ? formatDateTime(item?.date) : ''}</Td>
                    <Td>{item?.title}</Td>
                    <Th pr="0" textAlign="right">
                      <Button variant="calendar-receivables-btn">
                        Detalhes
                      </Button>
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
