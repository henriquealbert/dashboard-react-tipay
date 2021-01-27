import { Flex, Button } from '@chakra-ui/react';

import Layout from 'components/Layout';
import MyProfile from 'components/MyProfile';

export default function MeuPerfil() {
  return (
    <Layout perfil>
      <Flex direction="column" px="4.688rem" pt="4.5rem" w="100%" h="100%">
        <MyProfile />
        <Button
          mt="2.125rem"
          mb="3.313rem"
          variant="green"
          alignSelf="flex-end"
        >
          Salvar
        </Button>
      </Flex>
    </Layout>
  );
}
