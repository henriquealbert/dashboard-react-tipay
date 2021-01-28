import { Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import useTransfers from 'hooks/useTransfers';
import ErrorMessage from 'pages/ErrorMessage';

export default function Transferencias() {
  const { data, error, isError, isLoading } = useTransfers();

  return (
    <Layout>
      <Container>
        <InnerMenu pageTitle="Transferências" />
        <Flex mt="1rem">
          <SalesStatus />
        </Flex>
        <ToolsMenu />
        {isError && <ErrorMessage message={error.message} />}
        {isLoading && <TableSalesSkeleton />}
        {data && <TableTransfers data={data?.entries} />}
      </Container>
    </Layout>
  );
}
