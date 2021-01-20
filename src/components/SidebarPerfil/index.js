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
      w="21.75rem"
      h="100vh"
      bg="white"
      zIndex="sticky"
      position="fixed"
      boxShadow="0rem 0.188rem 1.25rem #0000003D"
      alignItems="center"
      pt="2.125rem"
    >
      <Link to="/dashboard">
        <Button variant="secondary" w="15.625rem" h="3.125rem">
          <ChevronLeftIcon h={8} w={8} position="absolute" left="0.938rem" />
          Voltar
        </Button>
      </Link>
      <Box mt="1.75rem" w="100%" pl="2rem">
        <MenuItemPerfil
          icon={PerfilIcon}
          w="2rem"
          h="1.813rem"
          text="Perfil"
          pathname="/meu-perfil"
        />
        <MenuItemPerfil
          icon={FriendsIcon}
          w="2rem"
          h="1.813rem"
          text="Clientes/Amigos"
          pathname="/clientes-amigos"
        />
        <MenuItemPerfil
          icon={PlanIcon}
          w="2rem"
          h="1.813rem"
          text="Meu plano"
          pathname="/meu-plano"
        />
        <MenuItemPerfil
          icon={DocumentsIcon}
          w="2rem"
          h="1.813rem"
          text="Documentos"
          pathname="/documentos"
        />
        <MenuItemPerfil
          icon={TermsIcon}
          w="2rem"
          h="1.813rem"
          text="Termos e Contrato"
          pathname="/termos-e-contrato"
        />
        <MenuItemPerfil
          icon={SupportIcon}
          w="2rem"
          h="1.813rem"
          text="Atendimento"
          pathname="/atendimento"
        />
        <MenuItemPerfil
          icon={AboutIcon}
          w="2rem"
          h="1.813rem"
          text="Sobre"
          pathname="/sobre"
        />
      </Box>
    </Flex>
  );
}
