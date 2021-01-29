import { Flex, Box, Button, Text } from '@chakra-ui/react';
import ProfilePic from '../ProfilePic';

const ProfileEditable = ({ item }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ md: 'space-between' }}
      w="100%"
      borderBottom="1px solid"
      borderColor="gray.1100"
      pb={{ base: '2rem', md: '0' }}
    >
      <Flex alignItems="center" py={{ base: '0', md: '1.875rem' }}>
        <Box
          w={{ base: '12rem', lg: '16.25rem' }}
          fontWeight="bold"
          fontSize="1.25rem"
          color="gray.900"
          textTransform="uppercase"
        >
          <ProfilePic data={item} />
        </Box>
        <Box fontSize="1.375rem">
          <Text
            color="gray.900"
            fontSize={{ base: '1rem', md: '1.25rem' }}
            lineHeight="1.5rem"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Nome
          </Text>
          <Text
            color="gray.900"
            fontSize={{ base: '1.75rem', md: '2.5rem' }}
            fontWeight="bold"
          >
            {item?.name}
          </Text>
        </Box>
      </Flex>

      <Button
        variant="link"
        fontSize="1.25rem"
        color="brand.yellow"
        alignSelf={{ base: 'flex-end', md: 'initial' }}
      >
        Editar
      </Button>
    </Flex>
  );
};

export default ProfileEditable;
