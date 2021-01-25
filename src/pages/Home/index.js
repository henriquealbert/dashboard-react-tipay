import { Box } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import HomeInnerMenu from 'components/InnerMenu/HomeInnerMenu';
import SalesStatus from 'components/SalesStatus';
import SalesPercentages from 'components/SalesPercentages';
import SalesCredit from 'components/SalesCredit';
import SalesByHour from 'components/SalesByHour';
import SalesByIssuer from 'components/SalesByIssuer';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box mb="3.25rem">
          <HomeInnerMenu />
          {/* <Box
            display="grid"
            gridTemplateColumns="2fr 1fr"
            gridGap="1.313rem"
            w="100%"
            mt="45px"
          >
            <SalesStatus />
            <SalesPercentages />
          </Box> */}
          {/* <Box
            display="grid"
            gridTemplateColumns="2fr 1fr"
            gridGap="1.313rem"
            w="100%"
          >
            <Box>
              <SalesCredit />
              <SalesByHour />
            </Box>
            <Box>
              <SalesByIssuer />
            </Box>
          </Box> */}
        </Box>
      </Container>
    </Layout>
  );
}
