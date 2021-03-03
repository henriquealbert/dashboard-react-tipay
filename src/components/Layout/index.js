import { Flex } from '@chakra-ui/react';
import GlobalLoader from 'components/GlobalLoader';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SidebarPerfil from 'components/SidebarPerfil';
import useProfile from 'hooks/useProfile';

export default function Layout({ children, perfil }) {
  const { data } = useProfile();

  return (
    <>
      <Header perfil={perfil} data={data} />
      {perfil ? <SidebarPerfil /> : <Sidebar />}

      <Flex
        as="main"
        bg="gray.200"
        w="100%"
        minH={{ lg: '100vh' }}
        h="100%"
        pt={{ base: '4rem', xxl: '7.375rem' }}
        pl={
          perfil
            ? { lg: '15rem', xxl: '21.75rem' }
            : { lg: '6.25rem', xxl: '7.5rem' }
        }
        position="relative"
      >
        <GlobalLoader />

        {children}
      </Flex>
    </>
  );
}
