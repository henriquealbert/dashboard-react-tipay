import { CheckIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import ModalDetailBuyer from './ModalDetailBuyer';

export default function Friend({
  data,
  boleto,
  selectedBuyer,
  setSelectedBuyer
}) {
  const handleClick = () => {
    if (boleto) {
      setSelectedBuyer(data.id);
    }
  };

  return (
    <Box
      borderTop={boleto ? '' : '1px solid'}
      borderBottom="1px solid"
      borderColor="gray.1100"
      py="1.5rem"
      alignItems="center"
      display="grid"
      gridTemplateColumns="3rem 1fr 11.25rem"
      gridGap="1.25rem"
    >
      {boleto ? (
        <Flex
          ml="1rem"
          w="1.75rem"
          h="1.75rem"
          borderRadius="50%"
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
          border={
            selectedBuyer === data?.id ? '1px solid #4EE2DE' : '1px solid'
          }
          onClick={handleClick}
          bg={selectedBuyer === data?.id ? '#4EE2DE' : ''}
        >
          {selectedBuyer === data?.id && <CheckIcon color="white" />}
        </Flex>
      ) : (
        <Avatar borderRadius="10px" w="48px" h="48px" />
      )}
      <Box ml="1.375rem" minW="15rem">
        <Text color="gray.500" fontSize="1.375rem" fontWeight="bold">
          {data?.first_name} {data?.last_name}
        </Text>
        <Text fontSize="1.125rem">{data?.taxpayer_id}</Text>
      </Box>
      <ModalDetailBuyer data={data} />
    </Box>
  );
}
