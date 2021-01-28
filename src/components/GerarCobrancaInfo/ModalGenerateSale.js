import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Img
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LinkQRCodeIcon } from 'styles/icons';

import InputLink from 'components/InputLink';

export default function ModalGenerateSale() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="green"
        w="100%"
        h="5.625rem"
        fontSize="1.875rem"
        mt="3rem"
        mb="3.5rem"
        onClick={onOpen}
      >
        Gerar Link <LinkQRCodeIcon ml="1rem" w="45px" h="2rem" />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="3xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent
          p={{ base: '1rem 1rem 1.5rem', lg: '1.5rem 2.5rem 2.5rem' }}
        >
          <ModalCloseButton />
          <ModalBody>
            <Img src="/images/qrcode.png" m="0 auto 1.625rem" />
            <InputLink
              label="Link"
              url="https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa"
            />
          </ModalBody>

          <ModalFooter
            mt="40px"
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Button
              as={Link}
              to="/link-qrcode"
              variant="red"
              h="5.625rem"
              w={{ base: '100%', md: '50%' }}
              mr={{ md: '1rem' }}
              mb={{ base: '1rem', md: '0' }}
              fontSize="1.875rem"
            >
              Fechar
            </Button>
            <Button
              variant="green"
              w={{ base: '100%', md: '50%' }}
              h="5.625rem"
              fontSize="1.875rem"
            >
              Compartilhar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
