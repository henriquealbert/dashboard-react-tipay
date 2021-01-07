import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MenuItemPerfil from './MenuItemPerfil';
import {
  AboutIcon,
  DocumentsIcon,
  FriendsIcon,
  PerfilIcon,
  PlanIcon,
  SupportIcon,
  TermsIcon
} from 'styles/icons';

export default function SidebarPerfil() {
  return (
    <Flex
      direction="column"
      w="348px"
      h="100vh"
      bg="white"
      zIndex="sticky"
      position="fixed"
      boxShadow="0px 3px 20px #0000003D"
      alignItems="center"
      pt="34px"
    >
      <Link to="/">
        <Button variant="secondary" w="250px" h="50px">
          <ChevronLeftIcon h={8} w={8} position="absolute" left="15px" />
          Voltar
        </Button>
      </Link>
      <Box mt="28px" w="100%" pl="32px">
        <MenuItemPerfil
          icon={PerfilIcon}
          w="32px"
          h="29px"
          text="Perfil"
          pathname="/meu-perfil"
        />
        <MenuItemPerfil
          icon={FriendsIcon}
          w="32px"
          h="29px"
          text="Clientes/Amigos"
          pathname="/clientes-amigos"
        />
        <MenuItemPerfil
          icon={PlanIcon}
          w="32px"
          h="29px"
          text="Meu plano"
          pathname="/meu-plano"
        />
        <MenuItemPerfil
          icon={DocumentsIcon}
          w="32px"
          h="29px"
          text="Documentos"
          pathname="/documentos"
        />
        <MenuItemPerfil
          icon={TermsIcon}
          w="32px"
          h="29px"
          text="Termos e Contrato"
          pathname="/termos-e-contrato"
        />
        <MenuItemPerfil
          icon={SupportIcon}
          w="32px"
          h="29px"
          text="Atendimento"
          pathname="/atendimento"
        />
        <MenuItemPerfil
          icon={AboutIcon}
          w="32px"
          h="29px"
          text="Sobre"
          pathname="/sobre"
        />
      </Box>
    </Flex>
  );
}
