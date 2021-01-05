import { Flex } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import HomeInnerMenu from 'components/InnerMenu/HomeInnerMenu';
import SalesStatus from 'components/SalesStatus';
import SalesPercentages from 'components/SalesPercentages';
import SalesCredit from 'components/SalesCredit';

export default function Home() {
  return (
    <Layout>
      <Container>
        <HomeInnerMenu />
        <Flex w="100%" mt="45px">
          <SalesStatus />
          <SalesPercentages />
        </Flex>
        <SalesCredit />
      </Container>
    </Layout>
  );
}
