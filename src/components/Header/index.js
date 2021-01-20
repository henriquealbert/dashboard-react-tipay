import { Flex, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';

export default function Header({ perfil }) {
  return (
    <Flex
      w={perfil ? 'calc(100% - 21.75rem)' : 'calc(100% - 8.063rem)'}
      h="7.375rem"
      bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      zIndex="dropdown"
      justifyContent="space-between"
      alignItems="center"
      pr="4.688rem"
      position="fixed"
      right="0"
    >
      <Link to="/dashboard">
        <Img
          src="/images/logo.svg"
          alt="Logo Tipay"
          w="7.25rem"
          h="4.25rem"
          ml="4.688rem"
        />
      </Link>
      <Menu />
    </Flex>
  );
}
