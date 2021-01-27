import { Flex } from '@chakra-ui/react';
import GlobalLoader from 'components/GlobalLoader';

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
        minH={{ lg: '100vh' }}
        h="100%"
        pt="7.375rem"
        pl={{ lg: `${perfil ? '21.75rem' : '8.063rem'}` }}
        position="relative"
      >
        <GlobalLoader />

        {children}
      </Flex>
    </>
  );
}
