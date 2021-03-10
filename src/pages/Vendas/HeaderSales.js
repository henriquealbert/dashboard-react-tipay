import { Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import ErrorMessage from 'components/ErrorMessage';
import InnerMenu from 'components/InnerMenu';
import SalesPercentages from 'components/SalesPercentages';
import SalesStatus from 'components/SalesStatus';
import useStatisticsTransactions from 'hooks/useStatisticsTransactions';

export default function HeaderSales({ useContext }) {
  const { headerStartDate, headerEndDate } = useContext;
  const { data, isError, error, isLoading } = useStatisticsTransactions(
    headerStartDate,
    headerEndDate
  );

  return (
    <Box>
      <InnerMenu pageTitle="Vendas" useContext={useContext} />
      {isError && <ErrorMessage message={error.message} />}
      {isLoading && (
        <Box
          display={{ base: 'block', xl: 'grid' }}
          gridTemplateColumns={{ xl: '1fr 1fr', xxl: '2fr 1fr' }}
          gridGap={{ xl: '1.313rem' }}
          w="100%"
          mt="0.5rem"
        >
          <Skeleton
            h="211px"
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
            mb={{ base: '1rem', xl: '' }}
          />
          <Box
            w="100%"
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gridColumnGap={{ base: '1rem', xxl: '1.3rem' }}
          >
            <Skeleton
              boxShadow="0rem 0.188rem 0.625rem #0000000A"
              borderRadius="0.625rem"
              h="211px"
            />
            <Skeleton
              boxShadow="0rem 0.188rem 0.625rem #0000000A"
              borderRadius="0.625rem"
              h="211px"
            />
            <Skeleton
              boxShadow="0rem 0.188rem 0.625rem #0000000A"
              borderRadius="0.625rem"
              h="211px"
            />
          </Box>
        </Box>
      )}

      {data && (
        <Box
          display={{ base: 'block', xl: 'grid' }}
          gridTemplateColumns={{ xl: '1fr 1fr', xxl: '2fr 1fr' }}
          gridGap={{ xl: '1.313rem' }}
          w="100%"
          mt="0.5rem"
        >
          <SalesStatus data={data?.sales_status} />
          <SalesPercentages data={data?.general_percentages} />
        </Box>
      )}
    </Box>
  );
}
