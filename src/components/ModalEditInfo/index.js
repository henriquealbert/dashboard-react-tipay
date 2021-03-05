import {
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader
} from '@chakra-ui/react';
import EditAddress from 'components/MyProfile/InfoEditable/EditAddress';
import { useState } from 'react';

export default function ModalEditInfo({ item, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmiting, setSubmit] = useState(false);

  // usar modal como "casca" e incluir dentro do modalbody o formulario de cada um separado. vai funcionar melhor
  return (
    <>
      <Button
        variant="link"
        fontSize="1.25rem"
        color="brand.yellow"
        onClick={onOpen}
      >
        Editar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="7xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            as="h1"
            fontWeight="bold"
            fontSize="1.5rem"
            color="gray.900"
            textTransform="uppercase"
          >
            Editar {item?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px={{ base: '2rem', lg: '3.625rem' }} py="2rem">
            {item?.title === 'Endereço' ? (
              <EditAddress
                formId={`${item?.title}-form`}
                data={data}
                setSubmit={setSubmit}
                onClose={onClose}
              />
            ) : (
              ''
            )}
          </ModalBody>

          <ModalFooter mb="2rem" px={{ base: '2rem', lg: '3.625rem' }}>
            <Button variant="black" mr="2rem" maxH="60px" onClick={onClose}>
              Fechar
            </Button>
            <Button
              variant="green"
              type="submit"
              form={`${item?.title}-form`}
              isLoading={isSubmiting}
              loadingText="Carregando..."
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
