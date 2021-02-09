import { Table, Box } from '@chakra-ui/react';
import { useEffect } from 'react';

import PaginationTable from 'components/PaginationTable';
import TableBodyTransfers from './TableBodyTransfers';
import TableHeaderTransfers from './TableHeaderTransfers';

import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

export default function TableTransfers({ id, data, useContext }) {
  const { setCsv, printRef, setPage } = useContext;

  /************* GENERATE EXCEL CSV *************/
  useEffect(() => {
    const generateCsv = data?.entries.map((item) => ({
      Identificação: item?.id,
      Data: formatDateTime(item?.transfer_date),
      Status: statusText(item?.status, item?.status_detail),
      Valor: formatPrice(item?.amount)
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
        px={{ base: '1rem', xxl: '2.188rem' }}
        overflowX="auto"
        h="100%"
        ref={printRef}
      >
        <Table variant="sales" size="lg">
          <TableHeaderTransfers useContext={useContext} />

          <TableBodyTransfers data={data} />
        </Table>
      </Box>
      {data?.page_count > 1 && (
        <PaginationTable data={data} setPage={setPage} />
      )}
    </>
  );
}

const statusText = (status) => {
  switch (status) {
    case 0:
      return 'Transferência agendada';

    case 1:
      return 'Transferência efetuada com sucesso';

    case 2:
      return 'Transferência falahada';
  }
};
