import { Box, Flex } from '@chakra-ui/react';
import Container from 'components/Container';
import InnerMenu from 'components/InnerMenu';
import Layout from 'components/Layout';
import SalesStatus from 'components/SalesStatus';
import TableSalesSkeleton from 'components/TableSalesSkeleton';
import TableTransfers from 'components/TableTransfers';
import ToolsMenu from 'components/ToolsMenu';
import useTransfers from 'hooks/useTransfers';

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
        {isError && (
          <Box color="red.500" m="0 auto">
            {error.message}
          </Box>
        )}
        {isLoading && <TableSalesSkeleton />}
        {data && <TableTransfers data={data?.entries} />}
      </Container>
    </Layout>
  );
}
