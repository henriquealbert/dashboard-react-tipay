import { Button } from '@chakra-ui/react';
import { PrintIcon } from 'styles/icons';

export default function PrintBtn({ size, m }) {
  return (
    <Button
      variant="outline"
      isLoading={false}
      loadingText="Imprimindo..."
      size={size}
      m={m}
      fontSize="1.25rem"
    >
      <PrintIcon mr="8px" />
      Imprimir
    </Button>
  );
}
