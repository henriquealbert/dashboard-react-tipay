import { Button } from '@chakra-ui/react';
import { CSVLink } from 'react-csv';

import { ExportarIcon } from 'styles/icons';

export default function ExcelExport({ size, m, csv, csvFilename }) {
  return (
    <Button
      as={CSVLink}
      data={csv}
      filename={csvFilename}
      target="_blank"
      variant="outline"
      isLoading={false}
      loadingText="Exportando..."
      size={size}
      m={m}
      fontSize={{ base: '1rem', xxl: '1.25rem' }}
      padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
    >
      <ExportarIcon mr="8px" />
      Exportar Excel
    </Button>
  );
}
