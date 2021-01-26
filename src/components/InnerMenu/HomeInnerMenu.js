import { Flex } from '@chakra-ui/react';

import InnerMenu from '.';

export default function HomeInnerMenu() {
  return (
    <Flex
      justifyContent={{ base: 'initial', xl: 'space-between' }}
      direction={{ base: 'column', xl: 'row' }}
    >
      <InnerMenu pageTitle="Home" />
    </Flex>
  );
}
