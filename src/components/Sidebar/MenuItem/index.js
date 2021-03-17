import { Flex, Icon, Text } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

export default function MenuItem({ pathname, text, icon, w, h }) {
  const history = useHistory();

  const currentPage = () => {
    if (history.location.pathname.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Link to={pathname}>
      <Flex
        as="li"
        w={{ base: '76px', md: '100%' }}
        py={{ base: '1rem', lg: '0' }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{
          nav: { bg: 'brand.100' },
          svg: { color: 'white' },
          p: { color: 'brand.100' }
        }}
        mx={{ base: '0.35rem', lg: '0' }}
        mt={{ base: '2rem', md: '1rem', xxl: '2rem' }}
      >
        <Flex
          bg={currentPage() ? 'brand.100' : 'gray.200'}
          w={{ base: '3.25rem', xxl: '3.75rem' }}
          h={{ base: '3.25rem', xxl: '3.75rem' }}
          borderRadius="0.625rem"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            as={icon}
            color={currentPage() ? 'white' : 'gray.100'}
            w={w}
            h={h}
          />
        </Flex>
        <Text
          mt={{ base: '0.5rem', xxl: '0.875rem' }}
          textAlign="center"
          fontWeight={currentPage() ? 'bold' : 'normal'}
          fontSize={{ base: '0.85rem', lg: '0.7rem', xxl: '0.875rem' }}
          color="brand.100"
        >
          {text}
        </Text>
      </Flex>
    </Link>
  );
}
