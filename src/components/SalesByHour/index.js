import { Box, Flex, Text } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';
import { by_hour } from 'pages/Home/mockData';

export default function SalesByHour({ data }) {
  const graphsToShow = () => {
    if (data?.graphs_to_show?.sales_by_hour) {
      return [data?.sales_by_hour];
    }
    if (!data?.graphs_to_show?.sales_by_hour) {
      return by_hour;
    }
  };

  return (
    <Box
      bg="white"
      py="1.75rem"
      px={{ base: '1rem', xl: '2rem' }}
      mt="1.125rem"
      w="100%"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
    >
      <Text
        as="h4"
        fontWeight="bold"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        color="gray.500"
        mb="0.875rem"
      >
        Hora das Vendas
      </Text>
      <Flex position="relative" p="1rem 0">
        {!data?.graphs_to_show?.sales_by_hour && (
          <Text
            position="absolute"
            transform="translate(-50%, -50%)"
            left="50%"
            top="50%"
            p="1rem"
            borderRadius="0.625rem"
            fontWeight="bold"
            fontSize="1rem"
            color="gray.500"
            zIndex="2"
          >
            Não há dados para o período selecionado
          </Text>
        )}
        <Flex
          overflowX="auto"
          pb="1rem"
          w="100%"
          filter={data?.graphs_to_show?.sales_by_hour ? '' : 'blur(6px)'}
          bg={data?.graphs_to_show?.sales_by_hour ? '' : 'gray.200'}
        >
          <GraphicComponent data={graphsToShow()} />
        </Flex>
      </Flex>
    </Box>
  );
}

const GraphicComponent = ({ data }) => {
  return (
    <Flex
      h="190px"
      w="100%"
      border="0.063rem solid"
      borderColor="#DFDFDF"
      borderRadius="9px"
      minW="1000px"
    >
      <ResponsiveLine
        data={data}
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        pointColor="#353E48"
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
        pointSize={8}
        pointLabelYOffset={-12}
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
  );
};

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
