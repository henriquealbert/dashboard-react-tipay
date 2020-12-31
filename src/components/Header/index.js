import { Flex, Image } from '@chakra-ui/react';

import Menu from 'components/Menu';

export default function Header() {
  return (
    <Flex
      w="100%"
      h="118px"
      bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      pl="118px"
      position="fixed"
      zIndex="base"
      justifyContent="space-between"
      alignItems="center"
      pr="75px"
    >
      <Image
        src="/images/logo.svg"
        alt="Logo Tipay"
        w="116px"
        h="68px"
        ml="75px"
      />
      <Menu />
    </Flex>
  );
}
