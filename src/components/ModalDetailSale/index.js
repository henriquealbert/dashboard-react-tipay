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
import { formatStatusColor } from 'utils/formatStatusColor';
import { isBoleto } from 'utils/isBoleto';

export default function ModalDetailSale({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="green" maxW="150px" h="50px" onClick={onOpen}>
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
            pb="22px"
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
                  <Td maxW="280px">{data?.payer}</Td>
                  <Td>{data?.date}</Td>
                  <Td>{data?.value}</Td>
                  <Td>{data?.finalValue}</Td>
                  <Td>{isBoleto(data?.payment)}</Td>
                  <Td color={formatStatusColor(data?.status)} pr="0">
                    {data?.status}
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
                pb="22px"
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
                    <Td>27/05/2020 21:18:52</Td>
                    <Td>Autorização</Td>
                    <Td color={formatStatusColor(data?.status)} pr="0">
                      {data?.status}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="red" mr="16px">
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
