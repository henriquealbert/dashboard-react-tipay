import { Tr, Td, Button, Text } from '@chakra-ui/react';
import ProfilePic from '../ProfilePic';

const ImgTr = ({ item }) => {
  return (
    <Tr>
      <Td
        p="30px 0"
        w="260px"
        fontWeight="bold"
        fontSize="1.25rem"
        color="gray.900"
        textTransform="uppercase"
      >
        <ProfilePic data={item} />
      </Td>
      <Td p="30px 0" fontSize="1.375rem">
        <Text
          color="gray.900"
          fontSize="1.25rem"
          lineHeight="24px"
          fontWeight="bold"
          textTransform="uppercase"
        >
          Nome
        </Text>
        <Text
          color="gray.900"
          fontSize="40px"
          lineHeight="49px"
          fontWeight="bold"
        >
          {item?.name}
        </Text>
      </Td>
      <Td p="30px 0" textAlign="right">
        <Button variant="link" fontSize="1.25rem" color="brand.yellow">
          Editar
        </Button>
      </Td>
    </Tr>
  );
};

export default ImgTr;
