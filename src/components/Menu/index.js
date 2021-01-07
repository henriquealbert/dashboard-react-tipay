import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Fade, Flex, Img, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

export default function Menu() {
  const user = { img: '/images/user-img.png', name: 'Fulano de Tal' };

  const [isOpen, setIsOpen] = useState(false);

  const { handleLogout } = useAuth();

  return (
    <Flex position="relative" h="100%">
      <Flex
        as="button"
        outline="none"
        alignItems="center"
        h="100%"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Box border="2px solid #23DAC9" borderRadius="50%" w="51px" h="51px">
          <Avatar
            src={user?.img}
            alt={user?.name}
            borderRadius="50%"
            bg="gray.100"
          />
        </Box>

        <Text color="white" fontSize="18px" mx="22px" as="span">
          {user.name}
        </Text>

        <ChevronDownIcon color="white" w="30px" h="30px" />
      </Flex>
      {isOpen && (
        <Fade in={isOpen}>
          <Flex
            w="318px"
            bg="white"
            boxShadow="0px 3px 6px #00000029"
            position="absolute"
            top="118px"
            left="0"
            as="nav"
          >
            <Box
              as="ul"
              listStyleType="none"
              textAlign="left"
              color="gray.500"
              fontSize="20px"
              lineHeight="22px"
              w="100%"
              my="13px"
            >
              <Link to="/meu-perfil">
                <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                  <Img
                    src="/images/meu-perfil.svg"
                    alt="Meu Perfil"
                    mr="15px"
                  />
                  Meu Perfil
                </Flex>
              </Link>

              <Link to="/">
                <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                  <Img src="/images/dashboard.svg" alt="Dashboard" mr="20px" />
                  Dashboard
                </Flex>
              </Link>

              <Link to="/atendimento">
                <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                  <Img
                    src="/images/atendimento.svg"
                    alt="Atendimento"
                    mr="15px"
                  />
                  Atendimento
                </Flex>
              </Link>

              <Link to="/meu-plano">
                <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                  <Img src="/images/meu-plano.svg" alt="Meu Plano" mr="12px" />
                  Meu Plano
                </Flex>
              </Link>

              <Flex
                as="li"
                py="13px"
                ml="38px"
                alignItems="center"
                w="100%"
                cursor="pointer"
                onClick={handleLogout}
              >
                <Img src="/images/logout.svg" alt="Logout" mr="16px" />
                Logout
              </Flex>
            </Box>
          </Flex>
        </Fade>
      )}
    </Flex>
  );
}
