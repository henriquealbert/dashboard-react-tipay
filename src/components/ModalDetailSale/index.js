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
import ShareLinkButton from 'components/ShareLinkButton';
import { SearchIcon } from '@chakra-ui/icons';

export default function ModalDetailSale({
  id,
  data,
  // estornar,
  variant,
  setTransactionID,
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="7xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent p={{ base: '1rem', xxl: '3.25rem' }}>
          <ModalHeader
            fontSize={{ base: '1.5rem', xxl: '1.875rem' }}
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
                    {data?.complement?.url && <Th>Link Boleto</Th>}
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
                    <Td color={formatStatusColor(data?.transaction?.status)}>
                      {formatStatusLabel(data?.transaction?.status)}
                    </Td>
                    {data?.complement?.url && (
                      <Td pr="0">
                        <Text
                          as="a"
                          _hover={{ textDecoration: 'underline' }}
                          href={data?.complement?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visualizar Boleto <SearchIcon w={4} h={4} />
                        </Text>
                      </Td>
                    )}
                  </Tr>
                </Tbody>
              </Table>
            </Box>

            <Box mt="3.5rem" overflowX="auto">
              <Text
                fontSize={{ base: '1.5rem', xxl: '1.875rem' }}
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
            {/* {estornar && (
              <Button
                variant="red"
                mr="1rem"
                maxW={{ base: '10rem', xxl: 'none' }}
                maxH={{ base: '3.25rem', xxl: 'none' }}
                fontSize={{ base: '1rem', xxl: '1.25rem' }}
              >
                Estornar Venda
              </Button>
            )} */}
            {data?.complement?.url && (
              <ShareLinkButton
                url={data?.complement?.url}
                label="Visualizar Boleto"
                mr="1rem"
              />
            )}
            <Button
              variant="black"
              mr={3}
              onClick={onClose}
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              maxW={{ base: '7rem', xxl: 'none' }}
              maxH={{ base: '3.25rem', xxl: 'none' }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
