import { Flex, Text } from '@chakra-ui/react';

export default function PercentageItem({ value, label, color }) {
  return (
    <Flex
      bg={color}
      borderRadius="0.625rem"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      w="100%"
      direction="column"
    >
      <Text
        as="h4"
        fontSize={{ base: '1rem', xxl: '1.25rem' }}
        fontWeight="bold"
        lineHeight="1.5rem"
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
        pb="2.188rem"
        px="0.25rem"
        fontWeight="bold"
        fontSize={{ base: '2.75rem', xxl: '3rem' }}
        lineHeight="4.563rem"
        color="white"
      >
        {value === null ? '0' : value}%
      </Text>
    </Flex>
  );
}
