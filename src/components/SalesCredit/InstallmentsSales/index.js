import { Flex, Text, Box } from '@chakra-ui/react';
import { ResponsiveBar } from '@nivo/bar';

export default function InstallmentsSales({ theme }) {
  const data = [
    {
      '2x': 50,
      '3x': 25,
      '4x': 10,
      '5x': 32,
      '6x': 10,
      '7x': 5,
      '8x': 89,
      '9x': 69,
      '10x': 55,
      '11x': 3,
      '12x': 36
    }
  ];
  return (
    <Flex ml="48px" direction="column" w="100%">
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        lineHeight="24px"
        color="gray.500"
        mb="14px"
      >
        Vendas Parceladas
      </Text>
      <Flex height="190px" w="100%">
        <ResponsiveBar
          data={data}
          keys={[
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x',
            '11x',
            '12x'
          ]}
          groupMode="grouped"
          axisTop={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: 0
          }}
          axisRight={null}
          axisLeft={null}
          enableGridY={false}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          borderRadius="5px"
          padding={0}
          innerPadding={13}
          colors={['#36A2EB']}
          margin={{ top: 30, bottom: 40 }}
          theme={theme}
          labelFormat={(value) => <tspan y={-21}>{value}%</tspan>}
          tooltip={({ color, value, id }) => {
            return (
              <Flex justifyContent="center" alignItems="center">
                <Box w="1rem" h="1rem" bg={color} mb="2px" borderRadius="5px" />
                <Text lineHeight="1rem" fontSize="1rem" ml="5px">
                  {value}% - {id}
                </Text>
              </Flex>
            );
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom',
              direction: 'row',
              justify: true,
              translateX: -17,
              translateY: 20,
              itemWidth: 55,
              itemHeight: 0,
              itemsSpacing: 0,
              symbolSize: 0,
              itemDirection: 'left-to-right'
            }
          ]}
        />
      </Flex>
    </Flex>
  );
}
