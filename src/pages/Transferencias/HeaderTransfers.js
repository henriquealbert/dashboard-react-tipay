import { Box, Flex } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import InnerMenu from 'components/InnerMenu';
import SalesStatus from 'components/SalesStatus';

export default function HeaderTransfers({ useContext }) {
  // const data = [];
  const isLoading = true;

  // const { headerStartDate, headerEndDate } = useContext;
  // const { data, isError, error, isLoading } = useStatisticsTransfers(
  //   headerStartDate,
  //   headerEndDate
  // );

  return (
    <Box>
      <InnerMenu pageTitle="Transferências" useContext={useContext} />

      {/* {isError && <ErrorMessage message={error.message} />} */}
      {isLoading && (
        <Box w="100%" mt="1rem">
          <Skeleton
            h="211px"
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
          />
        </Box>
      )}

      {/* {data && (
        <Flex mt="1rem">
          <SalesStatus data={data?.sales_status} />
        </Flex>
      )} */}
    </Box>
  );
}
