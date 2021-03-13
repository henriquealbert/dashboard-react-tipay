import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import CustomInputDatepicker from 'components/CustomInputDatepicker';

export default function InfoBoleto({ register, control, errors }) {
  return (
    <Box>
      <Text
        color="gray.500"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        fontWeight="bold"
      >
        Informações boleto
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
          <Box w={{ md: '50%' }} mr={{ md: '2rem', xlg: '56px' }}>
            <FormControl mb="1.75rem" isInvalid={errors.amount}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="amount"
              >
                Valor a ser cobrado
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
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    decimalScale={2}
                    fixedDecimalScale
                    allowNegative={false}
                    prefix={'R$ '}
                    placeholder="Digite um valor"
                  />
                }
                defaultValue=""
                name="amount"
                id="amount"
                control={control}
              />
              <FormErrorMessage color="red.300">
                {errors.amount && errors.amount.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              mb={{ base: '1.75rem', md: '0' }}
              isInvalid={errors.expiration_date}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="expiration_date"
              >
                Data de vencimento
              </FormLabel>

              <Controller
                render={(props) => (
                  <CustomInputDatepicker
                    {...props}
                    selected={props.value}
                    placeholderText="Digite a data de vencimento"
                  />
                )}
                defaultValue=""
                name="expiration_date"
                id="expiration_date"
                control={control}
              />

              <FormErrorMessage color="red.300">
                {errors.expiration_date && errors.expiration_date.message}
              </FormErrorMessage>
            </FormControl>
          </Box>

          <Box w={{ md: '50%' }} ml={{ xlg: '56px' }}>
            <FormControl mb="1.75rem" isInvalid={errors.description}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="description"
              >
                Instruções do boleto
              </FormLabel>
              <Input
                variant="innerSolid"
                placeholder="Digite as instruções"
                id="description"
                name="description"
                ref={register}
                required
              />
              <FormErrorMessage color="red.300">
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.payment_limit_date}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Data limite de pagamento
              </FormLabel>

              <Controller
                render={(props) => (
                  <CustomInputDatepicker
                    {...props}
                    selected={props.value}
                    placeholderText="Digite a data limite de pagamento"
                  />
                )}
                defaultValue=""
                name="payment_limit_date"
                id="payment_limit_date"
                control={control}
              />
              <FormErrorMessage color="red.300">
                {errors.payment_limit_date && errors.payment_limit_date.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
