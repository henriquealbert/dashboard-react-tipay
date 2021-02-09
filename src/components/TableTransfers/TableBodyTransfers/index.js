import { Tbody, Tr, Td, Text } from '@chakra-ui/react';

import {
  CheckTipayIcon,
  ErrorTipayIcon,
  QuestionTipayIcon
} from 'styles/icons';

import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function TableBodyTransfers({ data }) {
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
              {formatDateTime(item?.transfer_date)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              {statusIcon(item?.status, item?.status_detail)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
              fontWeight="semibold"
            >
              {formatPrice(item?.amount)}
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}
const statusIcon = (status) => {
  switch (status) {
    case 0:
      return (
        <>
          <QuestionTipayIcon mr="1rem" />
          <Text display="inline" as="span">
            Transferência agendada
          </Text>
        </>
      );

    case 1:
      return (
        <>
          <CheckTipayIcon mr="1rem" />
          <Text display="inline" as="span">
            Transferência efetuada com sucesso
          </Text>
        </>
      );
    case 2:
      return (
        <>
          <ErrorTipayIcon mr="1rem" />
          <Text display="inline" as="span">
            Transferência falhada
          </Text>
        </>
      );
  }
};
