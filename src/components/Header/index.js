import { Flex, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';

export default function Header() {
  return (
    <Flex
      w="100%"
      h="118px"
      bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      pl="118px"
      position="fixed"
      zIndex="dropdown"
      justifyContent="space-between"
      alignItems="center"
      pr="75px"
    >
      <Link to="/">
        <Img
          src="/images/logo.svg"
          alt="Logo Tipay"
          w="116px"
          h="68px"
          ml="75px"
        />
      </Link>
      <Menu />
    </Flex>
  );
}
