import {
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Table,
  Tbody
} from '@chakra-ui/react';
import InfoEditable from 'components/MyProfile/InfoEditable';
import ProfileEditable from 'components/MyProfile/ProfileEditable';

export default function ModalDetailBuyer({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formattedData = [
    {
      id: 1,
      title: 'CPF/CNPJ',
      description: data?.taxpayer_id
    },
    {
      id: 2,
      title: 'Email',
      description: data?.email
    },
    {
      id: 3,
      title: 'Endereço',
      description: `${data?.street}, nº ${data?.number}, ${data?.neighborhood} - ${data?.city}/${data?.state} - CEP: ${data?.postal_code}`
    }
  ];
  const avatar = {
    id: 1,
    name: `${data?.first_name} ${data?.last_name}`,
    img: null
  };

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

      <Modal isOpen={isOpen} onClose={onClose} size="7xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody px={{ base: '2rem', lg: '3.625rem' }} py="2rem">
            <Box>
              <ProfileEditable item={avatar} buyer />
              <Box overflowX="auto">
                <Table>
                  <Tbody>
                    {formattedData?.map((item) => (
                      <InfoEditable key={item?.id} item={item} />
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter mb="2rem" px={{ base: '2rem', lg: '3.625rem' }}>
            <Button variant="green" onClick={onClose}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
