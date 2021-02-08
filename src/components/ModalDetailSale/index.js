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
import {
  formatOperationType,
  formatStatusColor,
  formatStatusLabel,
  formatStatusType,
  formatStatusTypeColor
} from 'utils/formatStatusColor';
import { formatPaymentType } from 'utils/formatPaymentType';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function ModalDetailSale({
  id,
  data,
  estornar,
  variant,
  setTransactionID
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant={variant ? variant : 'green'}
        maxW="13.125rem"
        h="3.125rem"
        onClick={() => {
          onOpen();
          setTransactionID(id);
        }}
      >
        Detalhes
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="7xl">
        <ModalOverlay />
        <ModalContent p={{ base: '1rem', xl: '3.25rem' }}>
          <ModalHeader
            fontSize="1.875rem"
            color="gray.900"
            lineHeight="2.313rem"
            fontWeight="bold"
            pb="1.375rem"
          >
            Detalhe da Venda
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box overflowX="auto">
              <Table variant="sales-modal">
                <Thead>
                  <Tr>
                    <Th>Identificação</Th>
                    <Th>Data</Th>
                    <Th>Valor</Th>
                    <Th>Valor Líquido</Th>
                    <Th>Pagamento</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{data?.transaction?.id}</Td>
                    <Td>{formatDateTime(data?.transaction?.dt_payment_br)}</Td>
                    <Td>{formatPrice(data?.transaction?.value)}</Td>
                    <Td>{formatPrice(data?.receivable?.amount)}</Td>
                    <Td>
                      {formatPaymentType(data?.transaction?.payment_type)}
                    </Td>
                    <Td
                      color={formatStatusColor(data?.transaction?.status)}
                      pr="0"
                    >
                      {formatStatusLabel(data?.transaction?.status)}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>

            <Box mt="3.75rem" overflowX="auto">
              <Text
                fontSize="1.875rem"
                color="gray.900"
                lineHeight="2.313rem"
                fontWeight="bold"
                pb="1.375rem"
              >
                Histórico das vendas
              </Text>
              <Box overflowY="auto" maxH="175px">
                <Table variant="sales-modal">
                  <Thead>
                    <Tr>
                      <Th w="25%">Identificação</Th>
                      <Th>Opreação</Th>
                      <Th pr="0" w="25%">
                        Status
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.transaction_history?.map((item) => (
                      <Tr key={item?.id}>
                        <Td>{item?.id}</Td>
                        <Td>{formatOperationType(item?.operation_type)}</Td>
                        <Td color={formatStatusTypeColor(item?.status_type)}>
                          {formatStatusType(item?.status_type)}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            {estornar && (
              <Button variant="red" mr="1rem">
                Estornar Venda
              </Button>
            )}
            <Button variant="black" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
