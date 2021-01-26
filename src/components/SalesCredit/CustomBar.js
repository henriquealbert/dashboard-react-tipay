import { ResponsiveBar } from '@nivo/bar';
import { Box, Flex, Text } from '@chakra-ui/react';

const CustomBar = ({ data, color }) => {
  const theme = {
    labels: {
      text: {
        fontSize: 14,
        color: '#606060',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
      }
    }
  };
  return (
    <ResponsiveBar
      data={data}
      keys={['value']}
      groupMode="grouped"
      minValue="0"
      maxValue="100"
      axisTop={null}
      axisBottom={{
        renderTick: CustomTick
      }}
      axisRight={null}
      axisLeft={null}
      enableGridY={false}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      borderRadius="0.313rem"
      padding={0.3}
      colorBy="color"
      colors={[color]}
      margin={{ top: 30, bottom: 40 }}
      theme={theme}
      labelFormat={(value) => <tspan y={-21}>{value}%</tspan>}
      tooltip={(item) => {
        return (
          <Flex w="140px" justifyContent="center">
            <Box
              w="1rem"
              h="1rem"
              bg={item.color}
              mb="0.125rem"
              borderRadius="0.313rem"
            />
            <Text lineHeight="1rem" fontSize="0.9rem" ml="0.313rem">
              {item.data.value}% - {item.data.id}
            </Text>
          </Flex>
        );
      }}
    />
  );
};

export default CustomBar;

const CustomTick = (tick) => {
  return (
    <g transform={`translate(${tick.x},${tick.y + 22})`}>
      <text
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fill: '#606060',
          fontSize: 14
        }}
      >
        {tick.value}
      </text>
    </g>
  );
};
