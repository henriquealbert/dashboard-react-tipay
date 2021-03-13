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
import BuyerForm from 'components/BuyerForm';

export default function ModalNewBuyer({ boleto }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant={boleto ? 'outline' : 'green'}
        w="100%"
        h="4.5rem"
        px="2.375rem"
        fontSize="1.125rem"
        maxW={boleto ? '260px' : 'none'}
      >
        Cadastrar novo cliente
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="7xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent p="2rem">
          <ModalHeader fontSize="1.875rem" color="gray.500" fontWeight="bold">
            Cadastrar Cliente
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BuyerForm padding="0" onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
