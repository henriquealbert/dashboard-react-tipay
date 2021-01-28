import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';

export default function InfoCharge() {
  return (
    <Box mt="2.25rem" w="100%">
      <Text
        color="gray.500"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        fontWeight="bold"
      >
        Informações cobrança
      </Text>
      <Box
        mt="12px"
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        borderRadius="0.625rem"
        w="100%"
        bg="white"
        p={{ base: '2rem', xlg: '3.625rem 4.25rem' }}
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <FormControl mb="1.75rem" mr={{ md: '2rem', xlg: '7rem' }}>
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Valor a ser cobrado
            </FormLabel>
            <Input variant="innerSolid" placeholder="Digite o valor" />
          </FormControl>

          <FormControl mb="1.75rem">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Data de vencimento
            </FormLabel>
            <Input
              variant="innerSolid"
              placeholder="Digite a data de vencimento"
            />
          </FormControl>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row' }}>
          <FormControl
            mb={{ base: '1.75rem', md: '0' }}
            mr={{ md: '2rem', xlg: '7rem' }}
          >
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Parcelas
            </FormLabel>

            <Select variant="innerSolid" placeholder="Selecione as parcelas">
              <option value="1">À vista</option>
              <option value="2">2x</option>
              <option value="3">3x</option>
              <option value="4">4x</option>
              <option value="5">5x</option>
              <option value="6">6x</option>
              <option value="7">7x</option>
              <option value="8">8x</option>
              <option value="9">9x</option>
              <option value="10">10x</option>
              <option value="11">11x</option>
              <option value="12">12x</option>
            </Select>
          </FormControl>

          <FormControl mb={{ base: '1.75rem', md: '0' }}>
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Duração do link
            </FormLabel>
            <Select variant="innerSolid" placeholder="Selecione a duração">
              <option value="value">Value</option>
            </Select>
          </FormControl>
        </Flex>
      </Box>
    </Box>
  );
}
