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
      fontSize="1.25rem"
    >
      <ExportarIcon mr="8px" />
      Exportar Excel
    </Button>
  );
}
