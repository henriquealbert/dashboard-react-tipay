import Filter from 'components/Filter';
import { Flex } from '@chakra-ui/react';

import ResultsPerPage from 'components/ResultsPerPage';
import CopyBtn from 'components/CopyBtn';
import ExcelExport from 'components/ExcelExport';
import PrintBtn from 'components/PrintBtn';

export default function ToolsMenu() {
  return (
    <Flex my="40px" justifyContent="space-between">
      <Flex>
        <Filter />
        <ResultsPerPage ml="2rem" />
      </Flex>
      <Flex>
        <CopyBtn size="lg" m="0 12px 0 0" />
        <ExcelExport size="lg" m="0 12px 0 0" />
        <PrintBtn size="lg" />
      </Flex>
    </Flex>
  );
}
