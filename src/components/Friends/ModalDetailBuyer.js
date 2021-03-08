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

export default function ModalDetailBuyer({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="secondary"
        w="9.25rem"
        h="2.75rem"
        borderRadius="5px"
        boxShadow="none"
        mr={{ md: '2rem' }}
        onClick={onOpen}
      >
        Detalhes
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
            Editar Cliente
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BuyerForm padding="0" onClose={onClose} edit data={data} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
