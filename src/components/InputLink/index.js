import { CheckIcon } from '@chakra-ui/icons';
import {
  InputGroup,
  FormLabel,
  Button,
  Text,
  Flex,
  Box
} from '@chakra-ui/react';
import { useState } from 'react';
import { CopyIcon } from 'styles/icons';

export default function InputLink({ url, label }) {
  const [copied, setCopy] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

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
      <Flex
        h="5rem"
        w="100%"
        border="0.125rem solid"
        borderColor="gray.1100"
        borderRadius="0.625rem 0 0 0.625rem"
        fontSize="1.125rem"
        lineHeight="1.375rem"
        textDecoration="underline"
        color="#002387"
        pl="1.625rem"
        alignItems="center"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
        maxW={{ base: 'none', md: '40vw', lg: '50vw', xl: 'none' }}
      >
        <Text
          as="a"
          target="_blank"
          href={url}
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {url}
        </Text>
      </Flex>
      <Button
        h="5rem"
        w="5rem"
        bg="#F6F6F6"
        display="flex"
        justifyContent="center"
        border="0.125rem solid"
        borderColor="gray.1100"
        ml="-2px"
        borderRadius="0 0.625rem 0.625rem 0"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Box>
            <CheckIcon w="2rem" h="2rem" color="#9B9B9B" />
            <Text as="span" fontSize="0.75rem" display="block">
              Copiado!
            </Text>
          </Box>
        ) : (
          <CopyIcon w="2rem" h="2rem" color="#9B9B9B" />
        )}
      </Button>
    </InputGroup>
  );
}
