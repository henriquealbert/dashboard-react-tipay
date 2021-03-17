import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { deleteBuyer } from 'api';

export default function DeleteModal({ id, closeDetailModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const toast = useToast();
  const queryClient = useQueryClient();

  const onDelete = async () => {
    const data = await deleteBuyer(id);
    toast({
      title: data?.error ? 'Erro!' : 'Sucesso!',
      description: data?.message,
      status: data?.error ? 'error' : 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    });
    queryClient.removeQueries('Buyers');
    onClose();
    closeDetailModal();
  };

  return (
    <>
      <Button
        variant="red"
        h="4.5rem"
        onClick={() => setIsOpen(true)}
        w={{ base: '100%', md: '13.75rem' }}
        mt={{ base: '1rem', md: '0' }}
      >
        Deletar
      </Button>

      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Cliente/Amigo
            </AlertDialogHeader>

            <AlertDialogBody>
              Você tem certeza? Você não poderá desfazer esta ação depois.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancelar</Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
