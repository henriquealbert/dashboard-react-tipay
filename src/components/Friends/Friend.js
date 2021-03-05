import { Avatar, Box, Text } from '@chakra-ui/react';
import ModalDetailBuyer from './ModalDetailBuyer';

export default function Friend({ data }) {
  return (
    <Box
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="gray.1100"
      py="1.5rem"
      alignItems="center"
      display={{ base: 'flex', md: 'grid' }}
      gridTemplateColumns="3rem 1fr 11.25rem"
    >
      <Avatar borderRadius="10px" w="48px" h="48px" />
      <Box ml="1.375rem">
        <Text color="gray.500" fontSize="1.375rem" fontWeight="bold">
          {data?.first_name} {data?.last_name}
        </Text>
        <Text fontSize="1.125rem">{data?.taxpayer_id}</Text>
      </Box>
      <ModalDetailBuyer data={data} />
    </Box>
  );
}
