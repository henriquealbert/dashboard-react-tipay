import { Box, Flex } from '@chakra-ui/react';
import InputFilter from 'components/InputFilter';
import Friend from './Friend';
import ModalNewBuyer from './ModalNewBuyer';

export default function Friends({ data }) {
  return (
    <Box
      bg="white"
      boxShadow="0px 3px 6px #00000029"
      borderRadius="10px"
      p={{ base: '2rem', md: '3rem' }}
      mt="2rem"
      mb="4rem"
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box w={{ base: '100%', md: 'calc(100% - 18rem)' }} mr="2rem">
          <InputFilter />
        </Box>
        <Box w={{ base: '100%', md: '18rem' }}>
          <ModalNewBuyer />
        </Box>
      </Flex>
      <Box mt="2rem" maxH="40rem" overflowY="auto">
        {data?.entries.map((item) => (
          <Friend key={item?.id} data={item} />
        ))}
      </Box>
    </Box>
  );
}
