import { Flex, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';

export default function Header({ perfil }) {
  return (
    <Flex
      w={perfil ? 'calc(100% - 348px)' : 'calc(100% - 129px)'}
      h="118px"
      bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      zIndex="dropdown"
      justifyContent="space-between"
      alignItems="center"
      pr="75px"
      position="fixed"
      right="0"
    >
      <Link to="/dashboard">
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
