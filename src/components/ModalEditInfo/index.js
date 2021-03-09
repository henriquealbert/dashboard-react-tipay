import { useState } from 'react';
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
import EditBankAccount from 'components/MyProfile/InfoEditable/EditBankAccount';
import RecoverPassword from 'components/RecoverPassword';

export default function ModalEditInfo({ item, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmiting, setSubmit] = useState(false);

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

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={item?.title === 'Senha' ? '3xl' : '4xl'}
      >
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
                data={data.store}
                setSubmit={setSubmit}
                onClose={onClose}
              />
            ) : item?.title === 'Conta bancária' ? (
              <EditBankAccount
                formId={`${item?.title}-form`}
                data={data.bank_account}
                setSubmit={setSubmit}
                onClose={onClose}
              />
            ) : item?.title === 'Senha' ? (
              <RecoverPassword
                perfil
                formId={`${item?.title}-form`}
                setSubmit={setSubmit}
                onClose={onClose}
              />
            ) : (
              ''
            )}
          </ModalBody>

          {item?.title === 'Senha' ? (
            ''
          ) : (
            <ModalFooter mb="2rem" px={{ base: '2rem', lg: '3.625rem' }}>
              <Button
                variant="black"
                mr="2rem"
                maxH="3.75rem"
                onClick={onClose}
              >
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
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
