import { Avatar, Box, Text, Button } from '@chakra-ui/react';

export default function Friend() {
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
          Nome do Amigo 1
        </Text>
        <Text fontSize="1.125rem">999.999.999-99</Text>
      </Box>
      <Button
        variant="secondary"
        w="9.25rem"
        h="2.75rem"
        borderRadius="5px"
        boxShadow="none"
        mr={{ md: '2rem' }}
      >
        Detalhes
      </Button>
    </Box>
  );
}
