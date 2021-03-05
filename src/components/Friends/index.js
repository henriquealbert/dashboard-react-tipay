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
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Box
          w={{ base: '100%', lg: 'calc(100% - 18rem)' }}
          mr="2rem"
          mb={{ base: '1rem', lg: '' }}
        >
          <InputFilter />
        </Box>
        <Box w={{ base: '100%', lg: '18rem' }}>
          <ModalNewBuyer />
        </Box>
      </Flex>
      <Box mt="2rem" maxH="40rem" overflowY="auto" overflowX="auto" pb="2rem">
        {data?.entries.map((item) => (
          <Friend key={item?.id} data={item} />
        ))}
      </Box>
    </Box>
  );
}
