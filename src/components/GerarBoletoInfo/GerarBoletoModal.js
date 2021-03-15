import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  ModalFooter
} from '@chakra-ui/react';
import InputLink from 'components/InputLink';
import { Link } from 'react-router-dom';
import { BoletoIcon } from 'styles/icons';

export default function GerarBoletoModal({
  formId,
  onClose,
  isOpen,
  isSubmitting,
  selectedBuyer,
  data
}) {
  return (
    <>
      <Button
        variant="green"
        w="100%"
        h="5.625rem"
        fontSize="1.875rem"
        mt="1rem"
        mb="3.5rem"
        type="submit"
        form={formId}
        isLoading={isSubmitting}
        loadingText="Gerando boleto..."
        disabled={selectedBuyer === null ? true : false}
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
              <InputLink label="Código do boleto" url={data?.barcode} />
              <Button
                as="a"
                href={data?.url}
                target="_blank"
                rel="noreferrer"
                variant="green"
                w={{ base: '100%', md: '18.75rem' }}
                h="4.938rem"
                ml={{ md: '1rem', lg: '3.75rem' }}
                mt={{ base: '1rem', md: '0' }}
              >
                Imprimir Boleto
              </Button>
            </Flex>
            <Flex
              w="100%"
              h="25rem"
              border="1px solid"
              borderColor="gray.1100"
              borderRadius="10px"
              mt="2rem"
              overflowY="auto"
              justifyContent="center"
              alignItems="center"
            >
              <iframe
                src={data?.url}
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </Flex>
            <ModalFooter mt="2rem" px="0">
              <Button as={Link} to="/boletos" variant="green" w="100%">
                Concluir
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
