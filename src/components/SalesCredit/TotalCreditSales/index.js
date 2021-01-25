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
    <Flex direction="column" borderRight="0.063rem solid #ECECEC">
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        color="gray.500"
        mb="0.875rem"
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
          borderRadius="0.313rem"
          padding={0}
          innerPadding={75}
          colors={['#FF6384', '#FF9F40']}
          margin={{ top: 30, bottom: 40, right: 70 }}
          theme={theme}
          labelFormat={(value) => <tspan y={-21}>{value}%</tspan>}
          tooltip={({ color, value, id }) => {
            return (
              <Flex justifyContent="center" alignItems="center">
                <Box
                  w="1rem"
                  h="1rem"
                  bg={color}
                  mb="0.125rem"
                  borderRadius="0.313rem"
                />
                <Text lineHeight="1rem" fontSize="1rem" ml="0.313rem">
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
