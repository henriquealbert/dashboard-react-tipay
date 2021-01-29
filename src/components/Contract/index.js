import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

export default function Contract({ title, ...rest }) {
  return (
    <Flex
      bg="white"
      boxShadow="0px 3px 6px #00000029"
      borderRadius="10px"
      p="2rem 3rem"
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Text
        color="gray.500"
        fontSize="1.25rem"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <ChevronRightIcon w={12} h={12} color="brand.yellow" />
    </Flex>
  );
}
