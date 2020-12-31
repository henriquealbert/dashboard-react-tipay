import { Box } from '@chakra-ui/react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

export default function Home() {
  return (
    <Box bg="gray.200">
      <Header />
      <Sidebar />
    </Box>
  );
}
