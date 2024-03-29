import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Fade, Flex, Img, Text, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import useProfile from 'hooks/useProfile';

export default function Menu() {
  const { handleLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useProfile();

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
        <Avatar
          src={''}
          alt={data?.store?.name}
          bg="gray.100"
          borderRadius="50%"
          w={{ base: '38px', md: '50px' }}
          h={{ base: '38px', md: '50px' }}
          border="2px solid #23DAC9"
        />

        {data ? (
          <Text color="white" fontSize="1.125rem" mx="1.375rem" as="span">
            {data?.store?.name}
          </Text>
        ) : (
          <Skeleton w="5.625rem" h="0.5rem" as="span" mx="1.375rem" />
        )}
        <ChevronDownIcon color="white" w="1.875rem" h="1.875rem" />
      </Flex>

      {isOpen && (
        <Fade in={isOpen}>
          <Flex
            w="31.125rem"
            bg="white"
            boxShadow="0rem 0.188rem 0.375rem #00000029"
            position="absolute"
            top={{ base: '6rem', xxl: '7.375rem' }}
            left={{ base: '-4rem', lg: '0' }}
            as="nav"
          >
            <Box
              as="ul"
              listStyleType="none"
              textAlign="left"
              color="gray.500"
              fontSize="1.25rem"
              lineHeight="1.375rem"
              w="100%"
              my="0.813rem"
            >
              <Link to="/meu-perfil">
                <Flex
                  as="li"
                  py="0.813rem"
                  ml="38px"
                  alignItems="center"
                  w="100%"
                >
                  <Img
                    src="/images/meu-perfil.svg"
                    alt="Meu Perfil"
                    mr="0.938rem"
                  />
                  Meu Perfil
                </Flex>
              </Link>

              <Link to="/dashboard">
                <Flex
                  as="li"
                  py="0.813rem"
                  ml="38px"
                  alignItems="center"
                  w="100%"
                >
                  <Img
                    src="/images/dashboard.svg"
                    alt="Dashboard"
                    mr="1.25rem"
                  />
                  Dashboard
                </Flex>
              </Link>

              <Link to="/atendimento">
                <Flex
                  as="li"
                  py="0.813rem"
                  ml="38px"
                  alignItems="center"
                  w="100%"
                >
                  <Img
                    src="/images/atendimento.svg"
                    alt="Atendimento"
                    mr="0.938rem"
                  />
                  Atendimento
                </Flex>
              </Link>

              {/* <Link to="/meu-plano">
                <Flex
                  as="li"
                  py="0.813rem"
                  ml="38px"
                  alignItems="center"
                  w="100%"
                >
                  <Img src="/images/meu-plano.svg" alt="Meu Plano" mr="12px" />
                  Meu Plano
                </Flex>
              </Link> */}

              <Flex
                as="li"
                py="0.813rem"
                ml="38px"
                alignItems="center"
                w="100%"
                cursor="pointer"
                onClick={handleLogout}
              >
                <Img src="/images/logout.svg" alt="Logout" mr="1rem" />
                Logout
              </Flex>
            </Box>
          </Flex>
        </Fade>
      )}
    </Flex>
  );
}
