import { Flex, Button } from '@chakra-ui/react';

import Layout from 'components/Layout';
import MyProfile from 'components/MyProfile';

export default function MeuPerfil() {
  return (
    <Layout perfil>
      <Flex direction="column" px="75px" pt="72px" w="100%" h="100%">
        <MyProfile />
        <Button mt="34px" mb="53px" variant="green" alignSelf="flex-end">
          Salvar
        </Button>
      </Flex>
    </Layout>
  );
}
