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
  Flex
} from '@chakra-ui/react';

import InputLink from 'components/InputLink';
import QRCodeComponent from 'components/QRCodeComponent';
import IsActiveLink from './IsActiveLink';
import ShareLinkButton from 'components/ShareLinkButton';

import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function ModalDetailLinkSale({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="green"
        maxW={{ base: '8rem', xxl: '13.125rem' }}
        fontSize={{ base: '1rem', xxl: '1.25rem' }}
        h={{ base: '2.75rem', xxl: '3.125rem' }}
        onClick={onOpen}
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
        <ModalContent p={{ base: '1rem', xxl: '3.25rem' }} overflowY="auto">
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
                  <IsActiveLink data={data} />

                  <InputLink label="Link" url={data?.link} />
                </Box>
              </Flex>
            </Box>
            <Box mt="3.75rem">
              <Text
                fontSize={{ base: '1.5rem', xxl: '1.875rem' }}
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
                      <Th>Identificação</Th>
                      <Th>Criado em</Th>
                      <Th>Atualizado em</Th>
                      <Th>Descrição</Th>
                      <Th>Valor</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{data?.id}</Td>
                      <Td>{formatDateTime(data?.created_at)}</Td>
                      <Td>{formatDateTime(data?.updated_at)}</Td>
                      <Td>{data?.description}</Td>
                      <Td>{formatPrice(data?.amount)}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <ShareLinkButton url={data?.link} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
