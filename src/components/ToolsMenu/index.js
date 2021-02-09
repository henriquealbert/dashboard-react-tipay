import { Flex } from '@chakra-ui/react';

import ResultsPerPage from 'components/ResultsPerPage';
import CopyBtn from 'components/CopyBtn';
import ExcelExport from 'components/ExcelExport';
import PrintBtn from 'components/PrintBtn';

export default function ToolsMenu({ tableID, csvFilename, useContext }) {
  const { printRef, csv, setPer_Page, per_Page, pageKey } = useContext;

  return (
    <Flex
      my="2rem"
      justifyContent={{ xl: 'space-between' }}
      direction={{ base: 'column', xl: 'row' }}
    >
      <ResultsPerPage
        setPer_Page={setPer_Page}
        per_Page={per_Page}
        pageKey={pageKey}
      />
      <Flex
        mt={{ base: '1rem', xl: '0' }}
        overflowX="auto"
        pb={{ base: '1rem', xl: '0' }}
        justifyContent={{ md: 'center' }}
      >
        <CopyBtn size="lg" m="0 12px 0 0" tableID={tableID} />

        <ExcelExport
          size="lg"
          m="0 12px 0 0"
          csv={csv}
          csvFilename={csvFilename}
        />

        <PrintBtn size="lg" componentRef={printRef} />
      </Flex>
    </Flex>
  );
}
