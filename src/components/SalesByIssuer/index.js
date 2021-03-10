import { Box, Flex, Text } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';
import { formatPrice } from 'utils/formatPrice';

export default function SalesByIssuer({ data }) {
  data?.map((item) => {
    if (item.label === 'Mastercard') {
      item.color = '#4BC0C0';
    }
    if (item.label === 'Visa') {
      item.color = '#36A2EB';
    }
    if (item.label === 'Elo') {
      item.color = '#FFCD56';
    }
    if (item.label === 'Outras') {
      item.color = '#FF6384';
    }
  });

  return (
    <Flex
      bg="white"
      p="2rem"
      mt="1.125rem"
      w="100%"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
      direction="column"
    >
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        color="gray.500"
        mb="3rem"
      >
        Venda por bandeiras
      </Text>
      <Flex height="250px">
        <ResponsivePie
          data={data}
          innerRadius={0.5}
          padAngle={2}
          enableRadialLabels={false}
          enableSliceLabels={false}
          colors={data?.map((item) => item.color)}
        />
      </Flex>
      <Box mt="1.5rem">
        {data?.map((item) => {
          return (
            <Flex
              key={item.id}
              justifyContent="space-between"
              mb="12px"
              maxW="500px"
              mx="auto"
            >
              <Flex alignItems="center">
                <Box
                  w="1.5rem"
                  h="1.5rem"
                  borderRadius="50%"
                  bg={item?.color}
                  mr="1.875rem"
                />
                <Text
                  fontSize="1.25rem"
                  color="gray.500"
                  display="inline-block"
                >
                  {item?.label}
                </Text>
              </Flex>
              <Text fontSize="1.25rem" color="gray.500">
                {formatPrice(item?.value)}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
}
