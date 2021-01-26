import { Flex, Text } from '@chakra-ui/react';

export default function PercentageItem({ value, label, color, mr }) {
  return (
    <Flex
      bg={color}
      borderRadius="0.625rem"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      mr={mr}
      w="100%"
      direction="column"
    >
      <Text
        as="h4"
        fontSize={{ base: '1rem', lg: '1.25rem' }}
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
        fontWeight="bold"
        fontSize={{ base: '3rem', lg: '3.75rem' }}
        lineHeight="4.563rem"
        color="white"
      >
        {value}
      </Text>
    </Flex>
  );
}
