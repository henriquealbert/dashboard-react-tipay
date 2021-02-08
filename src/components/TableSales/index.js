import { useEffect } from 'react';
import { Table, Box } from '@chakra-ui/react';

import PaginationTable from 'components/PaginationTable';
import TableHeaderSales from './TableHeaderSales';
import TableBodySales from './TableBodySales';

import { formatDateTime } from 'utils/formatDate';
import { formatStatusLabel } from 'utils/formatStatusColor';
import { formatPaymentTypeString } from 'utils/formatPaymentType';
import { formatPrice } from 'utils/formatPrice';

export default function TableSales({ id, data, useContext }) {
  const { setCsv, printRef, setPage } = useContext;

  /************* GENERATE EXCEL CSV *************/
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
        ref={printRef}
      >
        <Table variant="sales" size="lg">
          <TableHeaderSales useContext={useContext} />
          <TableBodySales data={data} useContext={useContext} />
        </Table>
      </Box>
      {data?.page_count > 1 && (
        <PaginationTable data={data} setPage={setPage} />
      )}
    </>
  );
}
