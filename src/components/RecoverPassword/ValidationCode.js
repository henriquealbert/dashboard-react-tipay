import { PinInput, HStack, PinInputField } from '@chakra-ui/react';

export default function ValidationCode({
  setPinValue,
  pinValue,
  name,
  ...props
}) {
  return (
    <HStack>
      <PinInput
        autoComplete="off"
        variant="filled"
        value={pinValue}
        onChange={setPinValue}
        name={name}
        {...props}
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
}
