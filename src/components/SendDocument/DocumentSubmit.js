import { CheckTipayIcon, ErrorTipayIcon } from 'styles/icons';
import { Flex, Text, Spinner, Icon } from '@chakra-ui/react';
import { useRef, useState } from 'react';

export default function DocumentSubmit({ icon, label, ...rest }) {
  const [isSucces, setSuccess] = useState(false);
  const [isError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fileUploaderRef = useRef(null);

  function handleClick() {
    if (isSucces) return;
    if (isLoading) return;

    fileUploaderRef.current.click();
  }
  function onChangeFile(event) {
    setLoading(true);

    event.preventDefault();
    var file = event.target.files[0];
    console.log(file);

    setLoading(false);
    setSuccess(true);
  }

  return (
    <>
      <input
        type="file"
        id="file"
        ref={fileUploaderRef}
        onChange={onChangeFile}
        style={{ display: 'none' }}
      />
      <Flex
        direction="column"
        border={isSucces ? '2px solid' : isError ? '2px solid' : '2px dashed'}
        borderColor={isSucces ? 'green.500' : isError ? 'red.500' : 'gray.1100'}
        borderRadius="6px"
        w="8.75rem"
        h="5.625rem"
        justifyContent="center"
        alignItems="center"
        position="relative"
        cursor={
          isSucces ? 'not-allowed' : isLoading ? 'not-allowed' : 'pointer'
        }
        onClick={handleClick}
        {...rest}
      >
        <Icon
          as={icon}
          w={12}
          h={12}
          color={isSucces ? 'green.500' : isError ? 'red.500' : 'gray.800'}
        />
        <Text
          fontSize="1.25rem"
          fontWeight="semibold"
          color={isSucces ? 'green.500' : isError ? 'red.500' : 'gray.800'}
        >
          {label}
        </Text>
        {isSucces && (
          <CheckTipayIcon
            position="absolute"
            right="2px"
            top="2px"
            w="1rem"
            h="1rem"
          />
        )}
        {isError && (
          <ErrorTipayIcon
            position="absolute"
            right="2px"
            top="2px"
            w="1rem"
            h="1rem"
          />
        )}
        {isLoading && (
          <Spinner
            position="absolute"
            right="2px"
            top="2px"
            w="1rem"
            h="1rem"
          />
        )}
      </Flex>
    </>
  );
}
