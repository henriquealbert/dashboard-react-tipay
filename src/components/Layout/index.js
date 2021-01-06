import { Flex } from '@chakra-ui/react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

export default function Layout({ children }) {
  return (
    <Flex>
      <Header />
      <Sidebar />
      <Flex
        as="main"
        bg="gray.200"
        w="100vw"
        minH="100vh"
        pt="118px"
        pl="129px"
      >
        {children}
      </Flex>
    </Flex>
  );
}
