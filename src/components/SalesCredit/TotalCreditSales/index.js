import { Box, Flex, Text } from '@chakra-ui/react';
import { ResponsiveBar } from '@nivo/bar';

export default function TotalCreditSales({ theme }) {
  const data = [
    {
      'À vista': 100,
      Parcelada: 25
    }
  ];
  return (
    <Flex direction="column" borderRight="1px solid #ECECEC">
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="20px"
        lineHeight="24px"
        color="gray.500"
        mb="14px"
      >
        Vendas no crédito
      </Text>
      <Flex height="190px" w="240px">
        <ResponsiveBar
          data={data}
          keys={['À vista', 'Parcelada']}
          groupMode="grouped"
          axisTop={null}
          axisBottom={null}
          axisRight={null}
          axisLeft={null}
          enableGridY={false}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          borderRadius="5px"
          padding={0}
          innerPadding={75}
          colors={['#FF6384', '#FF9F40']}
          margin={{ top: 30, bottom: 40, right: 70 }}
          theme={theme}
          labelFormat={(value) => <tspan y={-21}>{value}%</tspan>}
          tooltip={({ color, value, id }) => {
            return (
              <Flex justifyContent="center" alignItems="center">
                <Box w="16px" h="16px" bg={color} mb="2px" borderRadius="5px" />
                <Text lineHeight="16px" fontSize="16px" ml="5px">
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
              translateX: -12,
              translateY: 20,
              itemWidth: 90,
              itemHeight: 0,
              itemsSpacing: 40,
              symbolSize: 0,
              itemDirection: 'left-to-right'
            }
          ]}
        />
      </Flex>
    </Flex>
  );
}
