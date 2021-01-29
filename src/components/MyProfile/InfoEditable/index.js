import { Tr, Td, Button } from '@chakra-ui/react';

const InfoEditable = ({ item }) => {
  return (
    <Tr>
      <Td
        p="1.875rem 0"
        minW="180px"
        w="260px"
        fontWeight="bold"
        fontSize="1.25rem"
        color="gray.900"
        textTransform="uppercase"
      >
        {item.title}
      </Td>
      <Td p="1.875rem 0" fontSize="1.375rem" minW="250px">
        {item.description}
      </Td>
      <Td p="1.875rem 0" textAlign="right" minW="100px">
        <Button variant="link" fontSize="1.25rem" color="brand.yellow">
          Editar
        </Button>
      </Td>
    </Tr>
  );
};

export default InfoEditable;
