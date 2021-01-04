import { Flex, Text } from '@chakra-ui/react';

export default function PercentageItem({ value, label, color }) {
  return (
    <Flex
      bg={color}
      borderRadius="10px"
      boxShadow="0px 3px 10px #0000000A"
      ml="21px"
      w="192px"
      direction="column"
    >
      <Text
        as="h4"
        fontSize="20px"
        fontWeight="bold"
        lineHeight="24px"
        pl="20px"
        pt="15px"
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
        lineHeight="73px"
        color="white"
      >
        {value}
      </Text>
    </Flex>
  );
}
