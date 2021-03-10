import { Box, Text, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { formatPrice } from 'utils/formatPrice';

export default function FeeToClient({ hasFee, setFee, calculatedFee }) {
  const handleChange = () => {
    setFee(!hasFee);
  };

  const displayValue = () => {
    if (calculatedFee.value === '') {
      return 'R$ 0,00';
    }
    if (!hasFee) {
      return formatPrice(calculatedFee.value);
    }
    if (hasFee) {
      return formatPrice(calculatedFee.value_passing_fees);
    }
  };

  const displayValueReceive = () => {
    if (calculatedFee.value_to_receive === '') {
      return 'R$ 0,00';
    }
    if (!hasFee) {
      return formatPrice(calculatedFee.value_to_receive);
    }
    if (hasFee) {
      return formatPrice(calculatedFee.value_to_receive_passing_fees);
    }
  };

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
          Repassar taxa para o cliente?
        </FormLabel>
        <Switch id="juros_de_mora" value={hasFee} onChange={handleChange} />
      </FormControl>

      <Box
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        borderRadius="0.625rem"
        w="100%"
        bg="white"
        p={{ base: '2rem', xlg: '3rem 4.25rem' }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Text fontSize="1.25rem" lineHeight="2.5rem">
          Valor a ser cobrado:
          <Text as="span" ml="1rem" color="black" fontWeight="bold">
            {displayValue()}
          </Text>
        </Text>

        <Text fontSize="1.25rem" lineHeight="2.5rem">
          Valor a receber:
          <Text as="span" ml="1rem" color="black" fontWeight="bold">
            {displayValueReceive()}
          </Text>
        </Text>

        <Text fontSize="1.25rem" lineHeight="2.5rem">
          Valor do antifraude:
          <Text as="span" ml="1rem" color="black" fontWeight="bold">
            {calculatedFee.antifraud_fee === ''
              ? 'R$ 0,00'
              : formatPrice(calculatedFee.antifraud_fee)}
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
