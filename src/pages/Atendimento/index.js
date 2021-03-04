import { Box, Flex, Img, Text } from '@chakra-ui/react';

import Container from 'components/Container';
import FormAtendimento from 'components/FormAtendimento';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';

export default function Atendimento() {
  const socialLinks = [
    { title: '/app.tipay', icon: '/images/facebook.svg', alt: 'Facebook' },
    { title: '/tipay.app', icon: '/images/instagram.svg', alt: 'Instagram' },
    { title: '(41) 99645-0199', icon: '/images/tel.svg', alt: 'Telefone' },
    { title: 'atendimento@tipay.app', icon: '/images/email.svg', alt: 'Email' }
  ];
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
              Entrar em contato
            </Text>
            <Text maxW="550px" fontSize="1.25rem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </Text>
            <Text
              fontSize="1.25rem"
              color="gray.500"
              fontWeight="bold"
              textTransform="uppercase"
              mb="1rem"
              mt="2rem"
            >
              Redes Sociais
            </Text>
            {socialLinks.map((item, index) => (
              <Flex alignItems="center" key={index} mb="2rem">
                <Img src={item.icon} alt={item.alt} mr="1.375rem" />
                <Text fontSize="1.25rem">{item.title}</Text>
              </Flex>
            ))}
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
              left={{ base: 'auto', md: '0', lg: '-55px' }}
              right={{ base: '-1rem', md: 'auto' }}
            />
          </a>
        </Box>
      </Container>
    </Layout>
  );
}
