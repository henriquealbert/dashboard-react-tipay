import { Tr, Td, Button } from '@chakra-ui/react';

const InfoTr = ({ item }) => {
  return (
    <Tr>
      <Td
        p="30px 0"
        w="260px"
        fontWeight="bold"
        fontSize="20px"
        color="gray.900"
        textTransform="uppercase"
        border={item?.border}
      >
        {item.title}
      </Td>
      <Td p="30px 0" fontSize="22px" border={item?.border}>
        {item.description}
      </Td>
      <Td p="30px 0" textAlign="right" border={item?.border}>
        <Button variant="link" fontSize="20px" color="brand.yellow">
          Editar
        </Button>
      </Td>
    </Tr>
  );
};

export default InfoTr;
