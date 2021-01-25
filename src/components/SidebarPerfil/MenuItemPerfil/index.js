import { Flex, Icon, Text } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

export default function MenuItemPerfil({ pathname, text, icon, w, h }) {
  const history = useHistory();

  const currentPage = () => {
    if (history.location.pathname === pathname) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Link to={pathname}>
      <Flex
        w="100%"
        p="1.25rem"
        cursor="pointer"
        alignItems="center"
        _hover={{
          svg: { color: 'brand.100' },
          p: { color: 'brand.100' }
        }}
      >
        <Icon
          as={icon}
          color={currentPage() ? 'brand.100' : 'gray.100'}
          w={w}
          h={h}
        />
        <Text
          ml="1rem"
          fontWeight={currentPage() ? 'bold' : 'normal'}
          fontSize="1.188rem"
          color={currentPage() ? 'brand.100' : 'gray.700'}
        >
          {text}
        </Text>
      </Flex>
    </Link>
  );
}
