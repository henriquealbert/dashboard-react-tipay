import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex
} from '@chakra-ui/react';
import InputLink from 'components/InputLink';
import { BoletoIcon } from 'styles/icons';

export default function GerarBoletoModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="green"
        w="100%"
        h="5.625rem"
        fontSize="1.875rem"
        mt="1rem"
        mb="3.5rem"
        onClick={onOpen}
      >
        Gerar Boleto <BoletoIcon ml="1rem" w="2.813rem" h="2rem" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="7xl">
        <ModalOverlay />
        <ModalContent
          p={{ base: '1rem 1rem 1.5rem', lg: '1.5rem 2.5rem 2.5rem' }}
        >
          <ModalHeader fontSize="2.5rem" color="gray.500" fontWeight="bold">
            Boleto
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={{ base: 'column', md: 'row' }}>
              <InputLink
                label="Código do boleto"
                url="00020101021226770014BR.GOV.BCB.PIX2555api.itau/pix/qr/v2/c6e24562-4248-4ff0-9f5c-1f02a585"
              />
              <Button
                variant="green"
                w={{ base: '100%', md: '18.75rem' }}
                h="4.938rem"
                ml={{ md: '1rem', lg: '3.75rem' }}
                mt={{ base: '1rem', md: '0' }}
              >
                Imprimir Boleto
              </Button>
            </Flex>
            <p>webview pdf boleto</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
