import { Flex } from '@chakra-ui/react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SidebarPerfil from 'components/SidebarPerfil';

export default function Layout({ children, perfil }) {
  return (
    <>
      <Header perfil={perfil} />
      {perfil ? <SidebarPerfil /> : <Sidebar />}

      <Flex
        as="main"
        bg="gray.200"
        w="100%"
        minH={{ md: '100vh' }}
        h="100%"
        pt="7.375rem"
        pl={{ md: `${perfil ? '21.75rem' : '8.063rem'}` }}
      >
        {children}
      </Flex>
    </>
  );
}
