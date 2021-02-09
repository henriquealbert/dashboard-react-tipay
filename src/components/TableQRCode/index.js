import { Table, Box } from '@chakra-ui/react';
import PaginationTable from 'components/PaginationTable';

import { useEffect } from 'react';
import { formatDateTime } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';
import TableHeaderLink from './TableHeaderLinks';
import TableBodyLinks from './TableBodyLinks';

export default function TableQRCode({ id, data, useContext }) {
  const { setCsv, printRef, setPage } = useContext;

  useEffect(() => {
    const generateCsv = data?.entries?.map((item) => ({
      Identificação: item?.id,
      Descrição: item?.description,
      Data: formatDateTime(item?.created_at),
      Valor: formatPrice(item?.amount),
      'Pagamento por link': ''
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
          <TableHeaderLink useContext={useContext} />
          <TableBodyLinks data={data} />
        </Table>
      </Box>

      {data?.page_count > 1 && (
        <PaginationTable data={data} setPage={setPage} />
      )}
    </>
  );
}
