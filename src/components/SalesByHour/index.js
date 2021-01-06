import { Flex, Text } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';

export default function SalesByHour() {
  const data = [
    {
      id: 'sales by hour',
      data: [
        {
          x: '01:00',
          y: 1
        },
        {
          x: '02:00',
          y: 12
        },
        {
          x: '03:00',
          y: 3
        },
        {
          x: '04:00',
          y: 6
        },
        {
          x: '05:00',
          y: 0
        },
        {
          x: '06:00',
          y: 4
        },
        {
          x: '07:00',
          y: 0
        },
        {
          x: '08:00',
          y: 7
        },
        {
          x: '09:00',
          y: 9
        },
        {
          x: '10:00',
          y: 2
        }
      ]
    }
  ];

  return (
    <Flex
      bg="white"
      py="28px"
      px="60.75px"
      mt="18px"
      w="100%"
      boxShadow="0px 3px 10px #0000000A"
      borderRadius="10px"
      direction="column"
    >
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="20px"
        lineHeight="24px"
        color="gray.500"
        mb="14px"
      >
        Hora das Vendas
      </Text>
      <Flex
        height="190px"
        w="100%"
        border="1px solid"
        borderColor="#DFDFDF"
        borderRadius="9px"
      >
        <ResponsiveLine
          data={data}
          axisTop={null}
          axisRight={null}
          axisLeft={null}
          pointColor="#353E48"
          pointSize="0"
          enableCrosshair={false}
          enableGridY={false}
          theme={{
            grid: { line: { stroke: '#DFDFDF' } }
          }}
          layers={[
            'grid',
            'markers',
            'axes',
            'areas',
            'crosshair',
            DashedLine,
            'points',
            'slices',
            'mesh',
            'legends'
          ]}
          margin={{ bottom: 40, left: 40, right: 40, top: 40 }}
          enablePointLabel={true}
          pointLabel="y"
          pointLabelYOffset={-16}
          isInteractive={false}
          axisBottom={{
            // eslint-disable-next-line react/display-name
            renderTick: (data) => {
              return (
                <g
                  transform="translate(0,16)"
                  style={{ opacity: 1 }}
                  key={data.value}
                >
                  <text
                    alignmentBaseline="before-edge"
                    textAnchor="middle"
                    transform={`translate(${data.x}, 0) rotate(0)`}
                    style={{
                      fill: '#606060',
                      fontSize: 12,
                      fontWeight: 'bold'
                    }}
                  >
                    {data.value}
                  </text>
                </g>
              );
            }
          }}
        />
      </Flex>
    </Flex>
  );
}

const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
  return series.map(({ id, data, color }) => (
    <path
      key={id}
      d={lineGenerator(
        data.map((d) => ({
          x: xScale(d.data.x),
          y: yScale(d.data.y)
        }))
      )}
      fill="none"
      stroke={color}
      style={{ strokeDasharray: '5,5', strokeWidth: 2, stroke: '#353E48' }}
    />
  ));
};