import { Tr, Td } from '@chakra-ui/react';
import ModalEditInfo from 'components/ModalEditInfo';

const InfoEditable = ({ item, data }) => {
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
      <Td p="1.875rem 0" fontSize="1.375rem" lineHeight="1.5" minW="250px">
        {item.description}
      </Td>
      <Td p="1.875rem 0.2rem" textAlign="right" minW="100px">
        {item.editable && <ModalEditInfo item={item} data={data} />}
      </Td>
    </Tr>
  );
};

export default InfoEditable;
