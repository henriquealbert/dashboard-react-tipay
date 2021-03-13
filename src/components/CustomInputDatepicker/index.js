import DatePicker from 'react-datepicker';
import { Flex, forwardRef, Input } from '@chakra-ui/react';

function CustomInputDatepicker(props, ref) {
  return (
    <Flex
      css={{
        '.react-datepicker-wrapper': {
          width: '100%'
        }
      }}
    >
      <DatePicker
        customInput={<Input variant="innerSolid" w="100%" />}
        autoComplete="off"
        dateFormat="dd/MM/yyyy"
        ref={ref}
        {...props}
      />
    </Flex>
  );
}

export default forwardRef(CustomInputDatepicker);
