import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Flex
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LinkQRCodeIcon } from 'styles/icons';

import InputLink from 'components/InputLink';
import QRCodeComponent from 'components/QRCodeComponent';
import ShareLinkButton from 'components/ShareLinkButton';

export default function ModalGenerateSale({
  isOpen,
  onClose,
  isSubmitting,
  link
}) {
  return (
    <>
      <Button
        variant="green"
        w="100%"
        h="5.625rem"
        fontSize="1.875rem"
        mt="3rem"
        mb="3.5rem"
        type="submit"
        isLoading={isSubmitting}
        loadingText="Gerando Link..."
      >
        Gerar Link <LinkQRCodeIcon ml="1rem" w="45px" h="2rem" />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="3xl"
        scrollBehavior="inside"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent
          p={{ base: '1rem 1rem 1.5rem', lg: '1.5rem 2.5rem 2.5rem' }}
        >
          <ModalBody>
            <Flex justifyContent="center" mb="2rem">
              <QRCodeComponent url={link} />
            </Flex>
            <InputLink label="Link" url={link} />
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

            <ShareLinkButton
              url={link}
              w={{ base: '100%', md: '50%' }}
              h="5.625rem"
              fontSize="1.875rem"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
