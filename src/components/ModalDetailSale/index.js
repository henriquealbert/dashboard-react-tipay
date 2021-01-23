import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  Button,
  useDisclosure,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Box,
  Text
} from '@chakra-ui/react';
import { formatStatusColor, formatStatusLabel } from 'utils/formatStatusColor';
import { formatPaymentType } from 'utils/formatPaymentType';
import { formatDate } from 'utils/formatDate';

export default function ModalDetailSale({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="green" maxW="13.125rem" h="3.125rem" onClick={onOpen}>
        Detalhes
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="7xl">
        <ModalOverlay />
        <ModalContent p="52px">
          <ModalHeader
            fontSize="30px"
            color="gray.900"
            lineHeight="37px"
            fontWeight="bold"
            pb="1.375rem"
          >
            Detalhe da Venda
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="sales-modal">
              <Thead>
                <Tr>
                  <Th>Identificação</Th>
                  <Th>Pagador</Th>
                  <Th>Data</Th>
                  <Th>Valor</Th>
                  <Th>Valor Líquido</Th>
                  <Th>Pagamento</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{data?.id}</Td>
                  <Td maxW="280px">{data?.holder_name}</Td>
                  <Td>{formatDate(data?.dt_payment_br)}</Td>
                  <Td>{data?.value}</Td>
                  <Td>{data?.finalValue}</Td>
                  <Td>{formatPaymentType(data?.payment_type)}</Td>
                  <Td color={formatStatusColor(data?.status)} pr="0">
                    {formatStatusLabel(data?.status)}
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <Box mt="60px">
              <Text
                fontSize="30px"
                color="gray.900"
                lineHeight="37px"
                fontWeight="bold"
                pb="1.375rem"
              >
                Histórico das vendas
              </Text>
              <Table variant="sales-modal">
                <Thead>
                  <Tr>
                    <Th w="30%">Data e hora</Th>
                    <Th>Opreação</Th>
                    <Th pr="0" w="15%">
                      Status
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{data?.updated_at}</Td>
                    <Td>{data?.operation}</Td>
                    <Td color={formatStatusColor(data?.status)} pr="0">
                      {data?.status}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="red" mr="1rem">
              Estornar Venda
            </Button>
            <Button variant="black" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
