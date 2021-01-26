import { Flex } from '@chakra-ui/react';

import InnerMenu from '.';

export default function HomeInnerMenu() {
  return (
    <Flex
      justifyContent={{ base: 'initial', lg: 'space-between' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <InnerMenu pageTitle="Home" />
    </Flex>
  );
}
