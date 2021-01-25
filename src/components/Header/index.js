import { Flex, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';

export default function Header({ perfil }) {
  return (
    <Flex
      w={{
        base: '100%',
        md: `${perfil ? 'calc(100% - 21.75rem)' : 'calc(100% - 8.063rem)'}`
      }}
      h="7.375rem"
      bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      zIndex="dropdown"
      justifyContent="space-between"
      alignItems="center"
      pr={{ base: '1rem', md: '4.688rem' }}
      position="fixed"
      right="0"
    >
      <Link to="/dashboard">
        <Img
          src="/images/logo.svg"
          alt="Logo Tipay"
          w={{ base: '5rem', md: '7.25rem' }}
          ml={{ base: '1rem', md: '4.688rem' }}
        />
      </Link>
      <Menu />
    </Flex>
  );
}
