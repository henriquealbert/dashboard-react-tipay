import { Box, Img, Text } from '@chakra-ui/react';

import Container from 'components/Container';
import FormAtendimento from 'components/FormAtendimento';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import SocialLinks from 'components/SocialLinks';

export default function Atendimento() {
  return (
    <Layout perfil>
      <Container>
        <PageTitle>Atendimento</PageTitle>
        <Box
          bg="white"
          boxShadow="0px 3px 6px #00000029"
          borderRadius="10px"
          p="3rem"
          mt="2rem"
          mb="4rem"
          display={{ md: 'grid' }}
          gridTemplateColumns="1fr 1fr"
          gridColumnGap="5rem"
          position="relative"
        >
          <Box>
            <Text
              fontSize="1.25rem"
              color="gray.500"
              fontWeight="bold"
              textTransform="uppercase"
              mb="1rem"
            >
              Redes Sociais
            </Text>
            <SocialLinks />
          </Box>

          <FormAtendimento />

          <a
            href="https://api.whatsapp.com/send?phone=5541996450199"
            target="blank"
          >
            <Img
              src="/images/whatsapp.png"
              w="7rem"
              alt="Whatsapp"
              position="absolute"
              bottom="-55px"
              left={{ base: 'auto', md: '0', xlg: '-55px' }}
              right={{ base: '-1rem', md: 'auto' }}
            />
          </a>
        </Box>
      </Container>
    </Layout>
  );
}
