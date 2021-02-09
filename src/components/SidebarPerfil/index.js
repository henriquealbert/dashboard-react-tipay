import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';
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
      boxShadow="0rem 0.188rem 1.25rem #0000003D"
      direction={{ base: 'row', lg: 'column' }}
      w={{ base: '100%', lg: '15rem', xxl: '21.75rem' }}
      h={{ lg: '100vh' }}
      bg="white"
      pt={{ lg: '1.5rem', xxl: '2.125rem' }}
      position="fixed"
      bottom={{ base: '0', lg: 'none' }}
      zIndex="sticky"
      alignItems="center"
      overflowX="auto"
    >
      <Button
        as={Link}
        to="/dashboard"
        variant="secondary"
        w={{ base: '13rem', xxl: '15.625rem' }}
        h="3.125rem"
        display={{ base: 'none', lg: 'flex' }}
      >
        <ChevronLeftIcon
          h={8}
          w={8}
          position="absolute"
          left={{ base: '0.25rem', xxl: '0.938rem' }}
        />
        Sair do Perfil
      </Button>
      <Flex
        direction={{ base: 'row', lg: 'column' }}
        alignItems={{ base: 'center' }}
        mt={{ xxl: '1.75rem' }}
        w="100%"
        pl={{ base: '0', xxl: '2rem' }}
        pr={{ base: '2rem', lg: '0' }}
        py={{ md: '1rem' }}
      >
        <MenuItemPerfil
          icon={PerfilIcon}
          text="Perfil"
          pathname="/meu-perfil"
        />
        <MenuItemPerfil
          icon={FriendsIcon}
          text="Clientes/Amigos"
          pathname="/clientes-amigos"
        />
        <MenuItemPerfil
          icon={PlanIcon}
          text="Meu plano"
          pathname="/meu-plano"
        />
        <MenuItemPerfil
          icon={DocumentsIcon}
          text="Documentos"
          pathname="/documentos"
        />
        <MenuItemPerfil
          icon={TermsIcon}
          text="Termos e Contrato"
          pathname="/termos-e-contrato"
        />
        <MenuItemPerfil
          icon={SupportIcon}
          text="Atendimento"
          pathname="/atendimento"
        />
        <MenuItemPerfil
          icon={AboutIcon}
          text="Sobre"
          pathname="/sobre"
          pr={{ base: '3rem', lg: '0' }}
        />
      </Flex>
    </Flex>
  );
}
