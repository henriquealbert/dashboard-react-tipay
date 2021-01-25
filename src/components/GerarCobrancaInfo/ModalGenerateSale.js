import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Img,
  Box
} from '@chakra-ui/react';
import InputLinkQRcode from 'components/InputLinkQRcode';
import { Link } from 'react-router-dom';
import { LinkQRCodeIcon } from 'styles/icons';

export default function ModalGenerateSale() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="green"
        w="100%"
        h="90px"
        fontSize="30px"
        mt="48px"
        mb="56px"
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
        <ModalContent p="52px 2rem">
          <ModalCloseButton />
          <ModalBody>
            <Img src="/images/qrcode.png" m="0 auto 1.625rem" />
            <InputLinkQRcode url="https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa" />
          </ModalBody>

          <ModalFooter mt="40px">
            <Box w="50%" mr="1rem">
              <Link to="/link-qrcode">
                <Button variant="red" h="90px" w="100%" fontSize="30px">
                  Fechar
                </Button>
              </Link>
            </Box>
            <Button variant="green" w="50%" h="90px" fontSize="30px">
              Compartilhar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
