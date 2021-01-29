import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Text,
  Flex,
  Button
} from '@chakra-ui/react';
import Container from 'components/Container';
import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import { useState } from 'react';

export default function MeuPlano() {
  const [slideValue, setSliderValue] = useState(250000);
  const [fee, setFee] = useState(false);

  const dataFee = [
    {
      title: 'Boleto pago',
      value: 'R$ 3,00'
    },
    {
      title: 'Crédito a vista',
      value: '3,89%'
    },
    {
      title: 'Crédito 2x',
      value: '5,19%'
    },
    {
      title: 'Crédito 3x',
      value: '6,29%'
    },
    {
      title: 'Crédito 4x',
      value: '7,39%'
    },
    {
      title: 'Crédito 5x',
      value: '8,49%'
    },
    {
      title: 'Crédito 6x',
      value: '9,59%'
    },
    {
      title: 'Crédito 7x',
      value: '10,69%'
    },
    {
      title: 'Crédito 8x',
      value: '11,79%'
    },
    {
      title: 'Crédito 9x',
      value: '12,89%'
    },
    {
      title: 'Crédito 10x',
      value: '13,99%'
    },
    {
      title: 'Crédito 11x',
      value: '15,10%'
    },
    {
      title: 'Crédito 12x',
      value: '16,89%'
    }
  ];

  return (
    <Layout perfil>
      <Container>
        <PageTitle>Meu Plano</PageTitle>
        <Box
          boxShadow="0px 3px 10px #0000000A"
          bg="white"
          borderRadius="10px"
          mb="4rem"
          mt="2rem"
        >
          <Box
            bg="linear-gradient(180deg, #0A172D 0%, #40474F 100%)"
            borderRadius="10px 10px 0px 0px"
            p="2rem 3rem"
          >
            <Text
              fontSize="2rem"
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Plano Pro (D+2)
            </Text>
            <Text fontSize="1.5rem" color="gray.200">
              Você receberá sua venda em até 2 dias
            </Text>
            <Slider
              aria-label="slider"
              value={slideValue}
              onChange={setSliderValue}
              max={1000000}
              size="lg"
              mt="2.375rem"
              mb="1rem"
            >
              <SliderTrack bg="gray.400">
                <SliderFilledTrack bg="white" />
              </SliderTrack>
              <SliderThumb w="34px" h="34px" />
            </Slider>
            <Flex justifyContent="space-between">
              <Text fontSize="1.5rem" color="gray.200" fontWeight="semibold">
                Meu Limite
              </Text>
              <Text fontSize="1.5rem" color="gray.200" fontWeight="semibold">
                R$ {slideValue}
              </Text>
            </Flex>
          </Box>

          <Box p="2rem 3rem">
            <Text
              fontSize="2rem"
              color="gray.500"
              fontWeight="bold"
              mb="1.75rem"
            >
              Minhas taxas para vendas no app:
            </Text>
            <Text color="gray.700" fontSize="1.5rem" mb="1.5rem">
              Crédito á vista 3,89%
            </Text>
            <Text color="gray.700" fontSize="1.5rem" mb="1.5rem">
              Boleto pago R$ 3,00
            </Text>
            <Text color="gray.700" fontSize="1.5rem" mb="2.75rem">
              Verificação Antifraude R$ 0,40
            </Text>

            <Flex mb="2rem" direction={{ base: 'column', xl: 'row' }}>
              <Button
                variant="outline"
                w={{ base: '100%', xl: '21.25rem' }}
                h="4.5rem"
                fontSize="1.5rem"
                fontWeight="semibold"
                mr="2rem"
                onClick={() => setFee((prev) => !prev)}
              >
                Minhas Taxas{' '}
                {fee ? (
                  <ChevronUpIcon ml="2rem" w={8} h={8} />
                ) : (
                  <ChevronDownIcon ml="2rem" w={8} h={8} />
                )}
              </Button>
              <Button
                as="a"
                href="https://api.whatsapp.com/send?phone=5541996450199"
                target="_blank"
                cursor="pointer"
                variant="outline"
                w={{ base: '100%', xl: '29.688rem' }}
                h="4.5rem"
                fontSize="1.5rem"
                fontWeight="semibold"
                mt={{ base: '1rem', xl: '0' }}
              >
                Ajuda sobre planos e limites
              </Button>
            </Flex>

            {fee && (
              <Box>
                {dataFee.map((item, index) => (
                  <Flex
                    key={index}
                    justifyContent="space-between"
                    borderTop="1px solid"
                    borderColor="gray.1100"
                    py="1rem"
                    px={{ base: '1rem', xl: '4rem' }}
                  >
                    <Text fontSize="1.5rem">{item.title}</Text>
                    <Text fontSize="1.5rem" color="gray.700" fontWeight="bold">
                      {item.value}
                    </Text>
                  </Flex>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
