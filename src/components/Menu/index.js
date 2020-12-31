import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Fade, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Menu() {
  const user = { img: '/images/user-img.png', name: 'Fulano de Tal' };

  const [isOpen, setIsOpen] = useState(false);

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
          <Image src={user.img} alt={user.name} />
        </Box>

        <Text color="white" fontSize="18px" mx="22px">
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
              <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                <Image
                  src="/images/meu-perfil.svg"
                  alt="Meu Perfil"
                  mr="15px"
                />
                <Text>Meu Perfil</Text>
              </Flex>
              <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                <Image src="/images/dashboard.svg" alt="Dashboard" mr="20px" />
                <Text>Dashboard</Text>
              </Flex>
              <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                <Image
                  src="/images/atendimento.svg"
                  alt="Atendimento"
                  mr="15px"
                />
                <Text>Atendimento</Text>
              </Flex>
              <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                <Image src="/images/meu-plano.svg" alt="Meu Plano" mr="12px" />
                <Text>Meu Plano</Text>
              </Flex>
              <Flex as="li" py="13px" ml="38px" alignItems="center" w="100%">
                <Image src="/images/logout.svg" alt="Logout" mr="16px" />
                <Text>Logout</Text>
              </Flex>
            </Box>
          </Flex>
        </Fade>
      )}
    </Flex>
  );
}
