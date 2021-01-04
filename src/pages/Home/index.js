import { Flex } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import HomeInnerMenu from 'components/InnerMenu/HomeInnerMenu';
import SalesStatus from 'components/SalesStatus';
import SalesPercentages from 'components/SalesPercentages';

export default function Home() {
  return (
    <Layout>
      <Container>
        <HomeInnerMenu />
        <Flex w="100%" mt="45px">
          <SalesStatus />
          <SalesPercentages />
        </Flex>
      </Container>
    </Layout>
  );
}
