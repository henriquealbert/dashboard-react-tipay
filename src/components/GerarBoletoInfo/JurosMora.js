import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Switch
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';

export default function JurosMora({ errors, control }) {
  const [hasJuros, setJuros] = useState(false);

  return (
    <Box>
      <FormControl display="flex" alignItems="center" my="1.375rem">
        <FormLabel
          htmlFor="hasJuros"
          mb="0"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.25rem"
        >
          Juros de mora?
        </FormLabel>
        <Switch
          id="hasJuros"
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
          p={{ base: '2rem', xlg: '3rem 4.25rem' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <FormControl
            mr={{ base: '2rem', xlg: '7rem' }}
            mb={{ base: '1.75rem', md: '0' }}
            isInvalid={errors.juros_mora}
          >
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
              htmlFor="juros_mora"
            >
              Juros de mora (a.m)
            </FormLabel>
            <Controller
              as={
                <NumberFormat
                  customInput={(inputProps) => (
                    <Input
                      {...inputProps}
                      variant="innerSolid"
                      autoComplete="off"
                    />
                  )}
                  displayType={'input'}
                  allowNegative={false}
                  placeholder="Juros de mora"
                  format="#.##%"
                />
              }
              defaultValue=""
              name="juros_mora"
              id="juros_mora"
              control={control}
            />
            <FormErrorMessage color="red.300">
              {errors.juros_mora && errors.juros_mora.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.multa_mora}>
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Multa de mora
            </FormLabel>

            <Controller
              as={
                <NumberFormat
                  customInput={(inputProps) => (
                    <Input
                      {...inputProps}
                      variant="innerSolid"
                      autoComplete="off"
                    />
                  )}
                  displayType={'input'}
                  allowNegative={false}
                  placeholder="Multa de mora"
                  format="#.##%"
                />
              }
              defaultValue=""
              name="multa_mora"
              id="multa_mora"
              control={control}
            />
            <FormErrorMessage color="red.300">
              {errors.multa_mora && errors.multa_mora.message}
            </FormErrorMessage>
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
