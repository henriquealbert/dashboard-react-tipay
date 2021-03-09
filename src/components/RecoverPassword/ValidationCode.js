import { PinInput, HStack, PinInputField } from '@chakra-ui/react';

export default function ValidationCode({ setPinValue, pinValue, name, id }) {
  return (
    <HStack>
      <PinInput
        autoComplete="off"
        size="lg"
        variant="filled"
        value={pinValue}
        onChange={setPinValue}
        name={name}
        id={id}
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
}
