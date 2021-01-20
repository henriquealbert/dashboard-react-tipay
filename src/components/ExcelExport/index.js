import { Button } from '@chakra-ui/react';
import { ExportarIcon } from 'styles/icons';

export default function ExcelExport({ size, m }) {
  return (
    <Button
      variant="outline"
      isLoading={false}
      loadingText="Exportando..."
      size={size}
      m={m}
      fontSize="1.25rem"
    >
      <ExportarIcon mr="8px" />
      Exportar Excel
    </Button>
  );
}
