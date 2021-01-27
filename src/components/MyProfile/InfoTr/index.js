import { Tr, Td, Button } from '@chakra-ui/react';

const InfoTr = ({ item }) => {
  return (
    <Tr>
      <Td
        p="1.875rem 0"
        w="260px"
        fontWeight="bold"
        fontSize="1.25rem"
        color="gray.900"
        textTransform="uppercase"
        border={item?.border}
      >
        {item.title}
      </Td>
      <Td p="1.875rem 0" fontSize="1.375rem" border={item?.border}>
        {item.description}
      </Td>
      <Td p="1.875rem 0" textAlign="right" border={item?.border}>
        <Button variant="link" fontSize="1.25rem" color="brand.yellow">
          Editar
        </Button>
      </Td>
    </Tr>
  );
};

export default InfoTr;
