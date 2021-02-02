import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableQRCode from 'components/TableQRCode';
import ToolsMenu from 'components/ToolsMenu';
import { LinkQRCodeIcon } from 'styles/icons';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import ErrorMessage from 'pages/ErrorMessage';
import useLinks from 'hooks/useLinks';

export default function LinkQRcode() {
  // print
  const printRef = useRef();
  // table csv
  const [csv, setCsv] = useState([]);

  // query
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);

  const { data, isError, error, isLoading } = useLinks(
    `/per_page=${per_Page}`,
    `/${page}`
  );

  return (
    <Layout>
      <Container>
        <Flex
          justifyContent={{ xxl: 'space-between' }}
          direction={{ base: 'column', xxl: 'row' }}
        >
          <InnerMenu pageTitle="Vendas por Links/QR Code" />
          <Flex alignSelf={{ xxl: 'center' }} mt={{ base: '1rem', xlg: '0' }}>
            <Button
              as={Link}
              to="/link-qrcode/gerar-cobranca"
              variant="green"
              w={{ base: '100%', xlg: '260px' }}
              h="3.75rem"
            >
              Gerar Cobrança
              <LinkQRCodeIcon
                ml="1rem"
                w="1.813rem"
                h="1.813rem"
                color="white"
              />
            </Button>
          </Flex>
        </Flex>
        <Flex mt="1rem">
          <SalesStatus />
        </Flex>

        <ToolsMenu
          setPer_Page={setPer_Page}
          per_Page={per_Page}
          pageKey=""
          tableID="table_qrcode"
          componentRef={printRef}
          csv={csv}
          csvFilename="tipay_links_qrcode.csv"
        />

        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && (
          <TableQRCode
            id="table_qrcode"
            ref={printRef}
            data={data}
            setPage={setPage}
            setCsv={setCsv}
          />
        )}
      </Container>
    </Layout>
  );
}
