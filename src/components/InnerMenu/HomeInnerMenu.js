import { Flex } from '@chakra-ui/react';
import ExcelExport from 'components/ExcelExport';

import InnerMenu from '.';

export default function HomeInnerMenu() {
  return (
    <Flex
      justifyContent={{ base: 'initial', md: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <InnerMenu pageTitle="Home" />
      <ExcelExport m={{ base: '1rem 0', md: '0' }} />
    </Flex>
  );
}
