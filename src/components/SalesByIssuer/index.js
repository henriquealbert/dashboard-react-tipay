import { Box, Flex, Text } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';
import { formatPrice } from 'utils/formatPrice';
import { issuers } from 'pages/Home/mockData';

export default function SalesByIssuer({ data }) {
  data?.card_brands?.map((item) => {
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
  const graphsToShow = () => {
    if (data?.graphs_to_show?.card_brands) {
      return data?.card_brands;
    }
    if (!data?.graphs_to_show?.card_brands) {
      return issuers;
    }
  };

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
      <Flex position="relative" p="1rem 0" w="100%">
        {!data?.graphs_to_show?.card_brands && (
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
            w="100%"
            textAlign="center"
          >
            Não há dados para o período selecionado
          </Text>
        )}
        <Flex
          filter={data?.graphs_to_show?.card_brands ? '' : 'blur(6px)'}
          bg={data?.graphs_to_show?.card_brands ? '' : 'gray.200'}
          w="100%"
          h="100%"
          py={data?.graphs_to_show?.card_brands ? '' : '2rem'}
          direction="column"
        >
          <Flex height="250px">
            <ResponsivePie
              data={graphsToShow()}
              innerRadius={0.5}
              padAngle={2}
              enableRadialLabels={false}
              enableSliceLabels={false}
              colors={graphsToShow()?.map((item) => item?.color)}
              tooltip={({ datum }) => {
                return (
                  <Flex
                    justifyContent="center"
                    bg="white"
                    p="0.5rem"
                    borderRadius="0.25rem"
                    boxShadow="0px 3px 6px #00000029"
                  >
                    <Box
                      w="1rem"
                      h="1rem"
                      bg={datum.data.color}
                      mb="0.125rem"
                      borderRadius="0.313rem"
                    />
                    <Text lineHeight="1rem" fontSize="0.9rem" ml="0.313rem">
                      {datum.data.id} - {formatPrice(datum.data.value)}
                    </Text>
                  </Flex>
                );
              }}
            />
          </Flex>
          <Box mt="1.5rem">
            {graphsToShow()?.map((item) => {
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
      </Flex>
    </Flex>
  );
}
