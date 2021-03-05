import { Input } from '@chakra-ui/input';
import NumberFormat from 'react-number-format';

export default function CurrencyInput({ placeholder, isFetching, value }) {
  return (
    <NumberFormat
      value={Number(value / 100)}
      displayType={'input'}
      thousandSeparator={'.'}
      decimalSeparator={','}
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      prefix={'R$'}
      customInput={StyledInput}
      placeholder={placeholder}
      isDisabled={isFetching}
      name={placeholder}
    />
  );
}

const StyledInput = (props) => {
  return (
    <Input
      variant="solid"
      _placeholder={{ color: 'gray.1000' }}
      fontSize="0.938rem"
      color="gray.500"
      padding={{ base: '0 0 0 0.5rem', xxl: '1rem' }}
      {...props}
    />
  );
};
