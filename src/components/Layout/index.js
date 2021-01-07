import { Box, Flex } from '@chakra-ui/react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SidebarPerfil from 'components/SidebarPerfil';

export default function Layout({ children, perfil }) {
  return (
    <Box>
      <Header perfil={perfil} />
      {perfil ? <SidebarPerfil /> : <Sidebar />}

      <Flex
        as="main"
        bg="gray.200"
        w="100%"
        minH="100vh"
        h="100%"
        pt="118px"
        pl={perfil ? '348px' : '129px'}
      >
        {children}
      </Flex>
    </Box>
  );
}
