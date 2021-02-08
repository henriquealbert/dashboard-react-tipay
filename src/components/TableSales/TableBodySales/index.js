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
            <Td>{item?.id}</Td>
            <Td maxW="365px">{item?.holder_name}</Td>
            <Td>{formatDateTime(item?.dt_payment_br)}</Td>
            <Td>{formatPrice(item?.value)}</Td>
            <Td color={formatStatusColor(item?.status)}>
              {formatStatusLabel(item?.status)}
            </Td>
            <Td>{formatPaymentType(item?.payment_type)}</Td>
            <Td pr={{ base: '2rem', xlg: '0' }} textAlign="right">
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
