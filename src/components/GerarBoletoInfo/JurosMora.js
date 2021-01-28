import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Switch
} from '@chakra-ui/react';
import { useState } from 'react';

export default function JurosMora() {
  const [hasJuros, setJuros] = useState(false);

  return (
    <Box>
      <FormControl display="flex" alignItems="center" my="1.375rem">
        <FormLabel
          htmlFor="juros_de_mora"
          mb="0"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.25rem"
        >
          Juros de mora?
        </FormLabel>
        <Switch
          id="juros_de_mora"
          value={hasJuros}
          onChange={() => setJuros(!hasJuros)}
        />
      </FormControl>

      {hasJuros ? (
        <Flex
          boxShadow="0rem 0.188rem 0.625rem #0000000A"
          borderRadius="0.625rem"
          w="100%"
          bg="white"
          p="3rem 4.25rem"
        >
          <FormControl id="mora" mr="7rem">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Juros de mora (a.m)
            </FormLabel>
            <Input
              type="text"
              variant="innerSolid"
              placeholder="Juros de mora"
            />
          </FormControl>

          <FormControl id="multa">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Multa de mora
            </FormLabel>
            <Input
              type="text"
              variant="innerSolid"
              placeholder="Multa de mora"
            />
          </FormControl>
        </Flex>
      ) : (
        <Flex
          bg="white"
          boxShadow="0rem 0.188rem 0.625rem #0000000A"
          h="5.625rem"
          borderRadius="0.625rem"
          justifyContent="center"
          alignItems="center"
          px="4.25rem"
        >
          <Box h="2px" bg="#F2F2F2" w="100%" />
        </Flex>
      )}
    </Box>
  );
}
