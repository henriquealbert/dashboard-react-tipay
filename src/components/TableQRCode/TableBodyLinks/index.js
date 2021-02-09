import { Tbody, Tr, Td } from '@chakra-ui/table';
import { CheckTipayIcon, QuestionTipayIcon } from 'styles/icons';

import ModalDetailLinkSale from 'components/ModalDetailLinkSale';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function TableBodyLinks({ data }) {
  return (
    <Tbody>
      {data?.entries.map((item) => {
        return (
          <Tr key={item?.id}>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              {item?.id}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
              maxW="365px"
            >
              {item?.description}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              {formatDateTime(item?.created_at)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              {formatPrice(item?.amount)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              <TdLimit item={item} />
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
              pr={{ base: '1rem', xl: '0' }}
              textAlign="right"
            >
              <ModalDetailLinkSale data={item} />
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}

const TdLimit = ({ item }) => {
  if (!item?.has_limit) {
    return (
      <>
        <QuestionTipayIcon mr="1rem" /> Sem limite
      </>
    );
  }
  if (item?.has_limit) {
    if (item?.current_limit !== 0) {
      return (
        <>
          <QuestionTipayIcon mr="1rem" /> {item?.limit - item?.current_limit} de{' '}
          {item?.limit}
        </>
      );
    } else {
      return (
        <>
          <CheckTipayIcon mr="1rem" /> {item?.limit - item?.current_limit} de{' '}
          {item?.limit}
        </>
      );
    }
  }
  return '';
};
