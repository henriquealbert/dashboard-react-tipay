import { Input } from '@chakra-ui/input';
import { forwardRef, useState } from 'react';
import NumberFormat from 'react-number-format';

const AmountInput = ({ placeholder, name, required }, ref) => {
  const [value, setValue] = useState('');

  return (
    <>
      <NumberFormat
        displayType={'input'}
        thousandSeparator={'.'}
        decimalSeparator={','}
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        prefix={'R$'}
        customInput={StyledInput}
        placeholder={placeholder}
        name={name}
        required={required}
        onValueChange={(e) => setValue(e.formattedValue)}
      />
      <input
        style={{ display: 'none' }}
        name={name}
        ref={ref}
        value={value}
        readOnly
        required={required}
      />
    </>
  );
};
export default forwardRef(AmountInput);

const StyledInput = (props) => <Input variant="innerSolid" {...props} />;
