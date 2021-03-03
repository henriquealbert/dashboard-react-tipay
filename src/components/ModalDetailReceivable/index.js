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
  formatStatusColorReceivable,
  formatStatusLabelReceivable,
  formatStatusType,
  formatStatusTypeColor
} from 'utils/formatStatusColor';
import { formatDateTime, formatDate } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function ModalDetailReceivable({
  id,
  setTransactionID,
  data,
  variant,
  calendar
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant={variant ? variant : 'green'}
        maxW={
          calendar
            ? { base: '5.25rem', xxl: '13.125rem' }
            : { base: '8rem', xxl: '13.125rem' }
        }
        fontSize={
          calendar
            ? { base: '0.85rem', xxl: '1.25rem' }
            : { base: '1rem', xxl: '1.25rem' }
        }
        h={{ base: '2.75rem', xxl: '3.125rem' }}
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
                    <Th>Esperado em</Th>
                    <Th>Pago em</Th>
                    <Th>Valor bruto</Th>
                    <Th>Pagamento</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{data?.transaction?.id}</Td>
                    <Td>{formatDate(data?.receivable?.expected_on)}</Td>
                    <Td>{formatDateTime(data?.receivable?.paid_at)}</Td>
                    <Td>{formatPrice(data?.receivable?.gross_amount)}</Td>
                    <Td>{formatPrice(data?.receivable?.amount)}</Td>
                    <Td
                      color={formatStatusColorReceivable(
                        data?.receivable?.status
                      )}
                      pr="0"
                    >
                      {formatStatusLabelReceivable(data?.receivable?.status)}
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
                      <Th>Operação</Th>
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
            <Button variant="black" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
