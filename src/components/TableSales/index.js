import { forwardRef, useEffect } from 'react';
import { Table, Box } from '@chakra-ui/react';

import PaginationTable from 'components/PaginationTable';
import TableHeaderSales from './TableHeaderSales';
import TableBodySales from './TableBodySales';

import { formatDateTime } from 'utils/formatDate';
import { formatStatusLabel } from 'utils/formatStatusColor';
import { formatPaymentTypeString } from 'utils/formatPaymentType';
import { formatPrice } from 'utils/formatPrice';

function TableSales(
  {
    id,
    data,
    setPage,
    setCsv,
    setTransactionID,
    detailData,
    setIdentification,
    setPayer,
    setAmount,
    setStatus,
    status,
    setPaymentType,
    paymentType,
    pageKey
  },
  ref
) {
  useEffect(() => {
    const generateCsv = data?.entries.map((item) => ({
      Identificação: item?.id,
      Pagador: item?.holder_name,
      Data: formatDateTime(item?.dt_payment_br),
      Valor: formatPrice(item?.value),
      Status: formatStatusLabel(item?.status),
      Pagamento: formatPaymentTypeString(item?.payment_type)
    }));
    setCsv(generateCsv);
  }, [data, setCsv]);

  return (
    <>
      <Box
        id={id}
        bg="white"
        borderRadius="0.625rem"
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        mb="40px"
        px="2.188rem"
        overflowX="auto"
        h="100%"
        ref={ref}
      >
        <Table variant="sales" size="lg">
          <TableHeaderSales
            setIdentification={setIdentification}
            setPayer={setPayer}
            setAmount={setAmount}
            setStatus={setStatus}
            status={status}
            setPaymentType={setPaymentType}
            paymentType={paymentType}
            pageKey={pageKey}
          />
          <TableBodySales
            data={data}
            setTransactionID={setTransactionID}
            detailData={detailData}
          />
        </Table>
      </Box>
      {data?.page_count > 1 && (
        <PaginationTable data={data} setPage={setPage} />
      )}
    </>
  );
}

export default forwardRef(TableSales);
