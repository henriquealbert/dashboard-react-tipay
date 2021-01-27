import Filter from 'components/Filter';
import { Flex } from '@chakra-ui/react';

import ResultsPerPage from 'components/ResultsPerPage';
import CopyBtn from 'components/CopyBtn';
import ExcelExport from 'components/ExcelExport';
import PrintBtn from 'components/PrintBtn';

export default function ToolsMenu() {
  return (
    <Flex
      mt={{ base: '0', xlg: '40px' }}
      mb={{ base: '2rem', xlg: '40px' }}
      justifyContent={{ xlg: 'space-between' }}
      direction={{ base: 'column', xlg: 'row' }}
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Filter />
        <ResultsPerPage />
      </Flex>
      <Flex
        mt={{ base: '1rem', xlg: '0' }}
        overflowX="auto"
        pb={{ base: '1rem', xlg: '0' }}
        justifyContent={{ md: 'center' }}
      >
        <CopyBtn size="lg" m="0 12px 0 0" />
        <ExcelExport size="lg" m="0 12px 0 0" />
        <PrintBtn size="lg" />
      </Flex>
    </Flex>
  );
}
