import { Flex, Text } from '@chakra-ui/react';

export default function PercentageItem({ value, label, color, mr }) {
  return (
    <Flex
      bg={color}
      borderRadius="10px"
      boxShadow="0rem 0.188rem 10px #0000000A"
      mr={mr}
      w="100%"
      direction="column"
    >
      <Text
        as="h4"
        fontSize="1.25rem"
        fontWeight="bold"
        lineHeight="24px"
        pl="1.25rem"
        pt="0.938rem"
        color="white"
      >
        {label}
      </Text>
      <Text
        alignSelf="center"
        justifySelf="center"
        m="auto"
        pb="35px"
        fontWeight="bold"
        fontSize="60px"
        lineHeight="4.563rem"
        color="white"
      >
        {value}
      </Text>
    </Flex>
  );
}
