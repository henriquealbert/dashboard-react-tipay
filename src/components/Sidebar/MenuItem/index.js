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
        w="100%"
        h="8.063rem"
        direction="column"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{
          nav: { bg: 'brand.100' },
          svg: { color: 'white' },
          p: { color: 'brand.100' }
        }}
      >
        <Flex
          as="nav"
          bg={currentPage() ? 'brand.100' : 'gray.200'}
          w="60px"
          h="60px"
          borderRadius="10px"
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
          mt="14px"
          textAlign="center"
          fontWeight={currentPage() ? 'bold' : 'normal'}
          fontSize="14px"
          color={currentPage() ? 'brand.100' : 'gray.700'}
        >
          {text}
        </Text>
      </Flex>
    </Link>
  );
}
