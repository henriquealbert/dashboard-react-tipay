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
  Flex,
  Switch,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import InputLink from 'components/InputLink';
import QRCodeComponent from 'components/QRCodeComponent';
import { formatStatusColor } from 'utils/formatStatusColor';

export default function ModalDetailLinkSale({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="green" maxW="13.125rem" h="3.125rem" onClick={onOpen}>
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
        <ModalContent p={{ base: '1rem', xl: '3.25rem' }} overflowY="auto">
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
            <Box
              border="0.125rem solid"
              borderColor="gray.1100"
              borderRadius="0.875rem"
            >
              <Flex direction={{ base: 'column', md: 'row' }}>
                <Box maxW="14.5rem" maxH="14.5rem" m="1rem">
                  <QRCodeComponent url={data?.link} />
                </Box>
                <Box
                  mt="1.875rem"
                  ml={{ lg: '2.5rem' }}
                  mr="1.875rem"
                  w="100%"
                  px={{ base: '1rem', lg: '0' }}
                  mb={{ base: '2rem', lg: '0' }}
                >
                  <FormControl id="link" mb="3rem">
                    <FormLabel fontWeight="bold">Link ativado</FormLabel>
                    <Switch size="lg" isChecked={data?.is_active} />
                  </FormControl>

                  <InputLink label="Link" url={data?.link} />
                </Box>
              </Flex>
            </Box>
            <Box mt="3.75rem">
              <Text
                fontSize="1.875rem"
                color="gray.900"
                lineHeight="2.313rem"
                fontWeight="bold"
                pb="1.375rem"
              >
                Histórico das vendas
              </Text>
              <Box overflowX="auto" overflowY="auto">
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
                      <Td maxW="15rem">{data?.payer}</Td>
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
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="green" w="17.25rem" h="4rem" fontSize="1.875rem">
              Compartilhar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
