import { Button } from '@chakra-ui/react';
import { CopyIcon } from 'styles/icons';

export default function CopyBtn({ size, m }) {
  return (
    <Button
      variant="outline"
      isLoading={false}
      loadingText="Copiando..."
      size={size}
      m={m}
      fontSize="20px"
    >
      <CopyIcon mr="8px" />
      Copiar
    </Button>
  );
}
