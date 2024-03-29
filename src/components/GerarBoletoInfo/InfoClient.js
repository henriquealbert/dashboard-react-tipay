import { Box, Flex, FormLabel, Text } from '@chakra-ui/react';
import { useState } from 'react';
import InputFilter from 'components/InputFilter';
import Friend from 'components/Friends/Friend';
import ModalNewBuyer from 'components/Friends/ModalNewBuyer';

export default function InfoClient({ selectedBuyer, setSelectedBuyer }) {
  const [filteredList, setFilteredList] = useState({ entries: [] });

  return (
    <Box
      mt="0.75rem"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
      w="100%"
      bg="white"
      p={{ base: '2rem', xlg: '3rem 4.25rem' }}
    >
      <FormLabel
        color="gray.1000"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        fontWeight="semibold"
      >
        Buscar cliente
      </FormLabel>

      <Flex direction={{ base: 'column', md: 'row' }}>
        <InputFilter setFilteredList={setFilteredList} />
        <ModalNewBuyer boleto />
      </Flex>

      <Box mt="1rem">
        {filteredList?.total_entries === 0 ? (
          <Text mt="1rem">Nenhum Resultado Encontrado.</Text>
        ) : (
          <Box maxH="20rem" overflowY="auto" overflowX="auto" pb="2rem">
            {filteredList?.entries?.map((item) => (
              <Friend
                key={item?.id}
                data={item}
                boleto
                selectedBuyer={selectedBuyer}
                setSelectedBuyer={setSelectedBuyer}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
