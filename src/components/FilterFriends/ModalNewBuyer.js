import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import NewClient from 'components/GerarBoletoInfo/NewClient';

export default function ModalNewBuyer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant="green"
        w="100%"
        h="4.5rem"
        px="2.375rem"
      >
        Cadastrar novo cliente
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="7xl">
        <ModalOverlay />
        <ModalContent p="2rem">
          <ModalHeader fontSize="1.875rem" color="gray.500" fontWeight="bold">
            Cadastrar Cliente
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewClient padding="0" onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
