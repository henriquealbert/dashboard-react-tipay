import { Flex } from '@chakra-ui/react';

export default function Sidebar() {
  return (
    <Flex
      direction="column"
      w="129px"
      h="100vh"
      bg="white"
      pt="118px"
      zIndex="sticky"
      position="fixed"
      boxShadow="0px 3px 20px #0000003D"
    >
      <p>home</p>
      <p>vendas</p>
      <p>boletos</p>
      <p>Link/QR code</p>
      <p>Transferências</p>
      <p>Calendário</p>
    </Flex>
  );
}
