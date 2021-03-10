import { Input } from '@chakra-ui/input';
import { forwardRef, useState } from 'react';
import NumberFormat from 'react-number-format';

const AmountInput = (
  { placeholder, name, required, setCalculatedFee },
  ref
) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const val = Number(e.formattedValue.replace(/[^\d]/g, ''));
    setValue(e.formattedValue);
    setCalculatedFee((prev) => ({ ...prev, value: val }));
  };

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
        onValueChange={handleChange}
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
