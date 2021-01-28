import {
  InputGroup,
  FormLabel,
  Input,
  InputRightAddon
} from '@chakra-ui/react';
import { CopyIcon } from 'styles/icons';

export default function InputLink({ url, label }) {
  return (
    <InputGroup w="100%">
      <FormLabel
        position="absolute"
        left="1.625rem"
        top="-0.938rem"
        bg="white"
        zIndex="1"
        p="0.313rem"
        textTransform="uppercase"
        color="#A9A9A9"
      >
        {label}
      </FormLabel>
      <Input
        placeholder="mysite"
        h="5rem"
        border="0.125rem solid"
        borderColor="gray.1100"
        borderRadius="0.625rem"
        isReadOnly
        value={url}
        fontSize="1.125rem"
        lineHeight="1.375rem"
        textDecoration="underline"
        color="#002387"
        cursor="default"
        pl="1.625rem"
      />
      <InputRightAddon
        h="5rem"
        w="5rem"
        bg="#F6F6F6"
        display="flex"
        justifyContent="center"
        border="0.125rem solid"
        borderColor="gray.1100"
        borderRadius="0.625rem"
        as="button"
      >
        <CopyIcon w="2rem" h="2rem" color="#9B9B9B" />
      </InputRightAddon>
    </InputGroup>
  );
}
