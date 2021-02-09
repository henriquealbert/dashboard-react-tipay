import { Flex, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';

export default function Header({ perfil }) {
  return (
    <Flex
      w={
        perfil
          ? {
              base: '100%',
              lg: 'calc(100% - 15rem)',
              xxl: 'calc(100% - 21.75rem)'
            }
          : {
              base: '100%',
              lg: 'calc(100% - 6.25rem)',
              xxl: 'calc(100% - 7.5rem)'
            }
      }
      h={{ base: '6rem', xxl: '7.375rem' }}
      bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
      zIndex="dropdown"
      justifyContent="space-between"
      alignItems="center"
      pr={{ base: '1rem', lg: '4rem' }}
      position="fixed"
      right="0"
    >
      <Link to="/dashboard">
        <Img
          src="/images/logo.svg"
          alt="Logo Tipay"
          w={{ base: '5rem', lg: '7.25rem' }}
          ml={{ base: '1rem', lg: '2rem', xxl: '4.6rem' }}
        />
      </Link>
      <Menu />
    </Flex>
  );
}
