import { Flex } from '@chakra-ui/react';
import ExcelExport from 'components/ExcelExport';

import InnerMenu from '.';

export default function HomeInnerMenu() {
  return (
    <Flex justifyContent="space-between">
      <InnerMenu pageTitle="Home" />
      {/* <ExcelExport /> */}
    </Flex>
  );
}
