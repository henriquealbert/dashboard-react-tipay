import { Flex, Icon, Text } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

export default function MenuItemPerfil({ pathname, text, icon, pr }) {
  const history = useHistory();

  const currentPage = () => {
    if (history.location.pathname === pathname) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Flex
      as={Link}
      to={pathname}
      w="100%"
      p={{ base: '1rem', xxl: '1.25rem' }}
      cursor="pointer"
      alignItems="center"
      _hover={{
        svg: { color: 'brand.100' },
        p: { color: 'brand.100' }
      }}
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'initial' }}
      pr={pr}
    >
      <Icon
        as={icon}
        color={currentPage() ? 'brand.100' : 'gray.100'}
        w={{ base: '1.75rem', xxl: '2rem' }}
        h="1.813rem"
      />
      <Text
        ml={{ md: '1rem', lg: '0.75rem', xxl: '1rem' }}
        fontWeight={currentPage() ? 'bold' : 'normal'}
        fontSize={{ base: '1rem', xxl: '1.188rem' }}
        color={currentPage() ? 'brand.100' : 'gray.700'}
        mt={{ base: '1rem', md: '0' }}
        textAlign="center"
        whiteSpace="nowrap"
      >
        {text}
      </Text>
    </Flex>
  );
}
