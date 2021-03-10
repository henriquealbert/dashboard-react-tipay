import { Box } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import SalesStatus from 'components/SalesStatus';
import SalesPercentages from 'components/SalesPercentages';
import SalesCredit from 'components/SalesCredit';
import SalesByHour from 'components/SalesByHour';
import SalesByIssuer from 'components/SalesByIssuer';
import InnerMenu from 'components/InnerMenu';

import { useHomeContext } from './HomeContext';
import useStatisticsHome from 'hooks/useStatisticsHome';

export default function Home() {
  const ctx = useHomeContext();

  const { data } = useStatisticsHome(ctx.headerStartDate, ctx.headerEndDate);
  // todo:
  // fix datepicker

  return (
    <Layout>
      <Container>
        <Box mb="3.25rem">
          <InnerMenu pageTitle="Home" useContext={ctx} />

          {data && (
            <Box bg="gray.200" ref={ctx.printRef}>
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
              <Box
                display={{ base: 'block', xxl: 'grid' }}
                gridTemplateColumns={{ xxl: '2fr 1fr' }}
                gridGap={{ xxl: '1.313rem' }}
                w="100%"
              >
                <Box>
                  <SalesCredit data={data} />
                  <SalesByHour />
                </Box>
                <SalesByIssuer data={data?.card_brands} />
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Layout>
  );
}
