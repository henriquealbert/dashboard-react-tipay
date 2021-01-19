import {
  InputGroup,
  FormLabel,
  Input,
  InputRightAddon
} from '@chakra-ui/react';
import { CopyIcon } from 'styles/icons';

export default function InputLinkQRcode({ url }) {
  return (
    <InputGroup w="100%">
      <FormLabel
        position="absolute"
        left="26px"
        top="-15px"
        bg="white"
        zIndex="1"
        p="5px"
        textTransform="uppercase"
        color="#A9A9A9"
      >
        Link
      </FormLabel>
      <Input
        placeholder="mysite"
        h="80px"
        border="2px solid"
        borderColor="gray.1100"
        borderRadius="10px"
        isReadOnly
        value={url}
        fontSize="18px"
        lineHeight="22px"
        textDecoration="underline"
        color="#002387"
        cursor="default"
        pl="26px"
      />
      <InputRightAddon
        h="80px"
        w="80px"
        bg="#F6F6F6"
        display="flex"
        justifyContent="center"
        border="2px solid"
        borderColor="gray.1100"
        borderRadius="10px"
        as="button"
      >
        <CopyIcon w="32px" h="32px" color="#9B9B9B" />
      </InputRightAddon>
    </InputGroup>
  );
}
