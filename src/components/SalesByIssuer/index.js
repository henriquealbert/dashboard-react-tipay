import { Box, Flex, Text } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';

export default function SalesByIssuer() {
  const data = [
    {
      id: 'Maestro',
      label: 'Maestro',
      value: 35,
      color: '#FF6384'
    },
    {
      id: 'Elo',
      label: 'Elo',
      value: 150,
      color: '#FFCD56'
    },
    {
      id: 'Mastercard',
      label: 'Mastercard',
      value: 108,
      color: '#4BC0C0'
    },
    {
      id: 'Visa',
      label: 'Visa',
      value: 45,
      color: '#36A2EB'
    }
  ];
  return (
    <Flex
      bg="white"
      py="1.75rem"
      px="3.75rem"
      mt="1.125rem"
      w="100%"
      h="100%"
      maxH="586px"
      boxShadow="0rem 0.188rem 10px #0000000A"
      borderRadius="10px"
      direction="column"
    >
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        lineHeight="24px"
        color="gray.500"
        mb="48px"
      >
        Venda por bandeiras
      </Text>
      <Flex height="280px">
        <ResponsivePie
          data={data}
          innerRadius={0.5}
          padAngle={2}
          enableRadialLabels={false}
          enableSliceLabels={false}
          colors={data.map((item) => item.color)}
        />
      </Flex>
      <Box mt="24px">
        {data.map((item) => {
          return (
            <Flex key={item.id} justifyContent="space-between" mb="12px">
              <Flex alignItems="center">
                <Box
                  w="24px"
                  h="24px"
                  borderRadius="50%"
                  bg={item.color}
                  mr="30px"
                />
                <Text
                  fontSize="1.25rem"
                  color="gray.500"
                  display="inline-block"
                >
                  {item.label}
                </Text>
              </Flex>
              <Text fontSize="1.25rem" color="gray.500">
                {item.value}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
}
