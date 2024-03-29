import { Tbody, Tr, Td } from '@chakra-ui/react';

import ModalDetailSale from 'components/ModalDetailSale';
import { useTransaction } from 'hooks/useTransaction';

import { formatDateTime } from 'utils/formatDate';
import { formatPaymentType } from 'utils/formatPaymentType';
import { formatPrice } from 'utils/formatPrice';
import { formatStatusColor, formatStatusLabel } from 'utils/formatStatusColor';

export default function TableBodySales({ data, useContext }) {
  const { setTransactionID, transactionID } = useContext;

  const { data: detailData } = useTransaction(transactionID);

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
              {item?.holder_name}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              {formatDateTime(item?.dt_payment_br)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              {formatPrice(item?.value)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
              color={formatStatusColor(item?.status)}
            >
              {formatStatusLabel(item?.status)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
            >
              {formatPaymentType(item?.payment_type)}
            </Td>
            <Td
              fontSize={{ base: '1rem', xxl: '1.25rem' }}
              py={{ base: '1rem', xxl: '1.25rem' }}
              pr={{ base: '1rem', xl: '0' }}
              textAlign="right"
            >
              <ModalDetailSale
                setTransactionID={setTransactionID}
                id={item?.id}
                data={detailData}
                estornar
              />
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}
