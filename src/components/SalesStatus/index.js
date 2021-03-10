import { Box, Flex, Text } from '@chakra-ui/react';
import { formatPrice } from 'utils/formatPrice';

export default function SalesStatus({ data }) {
  return (
    <Box
      w="100%"
      bg="white"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
      p={{ base: '1.5rem', xxl: '2rem' }}
      mb={{ base: '1.5rem', xlg: '0' }}
    >
      {data?.map((item) => (
        <Box key={item?.label}>
          <Flex justifyContent="space-between">
            <Text
              as="h4"
              color="gray.500"
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              lineHeight="1.5rem"
            >
              {item?.label}
            </Text>
            <Text
              as="span"
              color="gray.500"
              fontWeight="bold"
              fontSize={{ base: '1.15rem', xxl: '1.375rem' }}
              lineHeight="1.688rem"
            >
              {formatPrice(item?.value)}
            </Text>
          </Flex>
          {item?.label === 'Pendentes' ? (
            ''
          ) : (
            <Box
              h="0.063rem"
              bg="#ECECEC"
              m={{ base: '0.75rem', xxl: '1rem' }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
