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
  Text,
  Img,
  Flex,
  Switch,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import InputLinkQRcode from 'components/InputLinkQRcode';
import { formatStatusColor } from 'utils/formatStatusColor';

export default function ModalDetailLinkSale({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="green" maxW="150px" h="50px" onClick={onOpen}>
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
        <ModalContent p="38px 48px">
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
            <Box border="2px solid" borderColor="gray.1100" borderRadius="14px">
              <Flex>
                <Img src="/images/qrcode.png" />
                <Box mt="30px" ml="40px" mr="30px" w="100%">
                  <FormControl id="link" mb="48px">
                    <FormLabel fontWeight="bold">Link ativado</FormLabel>
                    <Switch size="lg" isChecked={data?.active_url} />
                  </FormControl>

                  <InputLinkQRcode url={data?.url} />
                </Box>
              </Flex>
            </Box>
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
                    <Th>Data e hora</Th>
                    <Th>Pagador</Th>
                    <Th>Data</Th>
                    <Th>Valor</Th>
                    <Th>Opreação</Th>
                    <Th pr="0">Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{data?.updated_at}</Td>
                    <Td maxW="240px">{data?.payer}</Td>
                    <Td>{data?.created_at}</Td>
                    <Td>{data?.value}</Td>
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
            <Button variant="green" w="276px" h="64px" fontSize="30px">
              Compartilhar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
