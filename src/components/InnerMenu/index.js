import { Button, Flex } from '@chakra-ui/react';
import ExcelExport from 'components/ExcelExport';
import PageTitle from 'components/PageTitle';
import { useState } from 'react';

import { CalendarioIcon } from 'styles/icons';

export default function InnerMenu({ pageTitle }) {
  const [active, setActive] = useState('3 meses');

  const handleActive = (label) => {
    if (active === label) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Flex
      direction={{
        base: 'column',
        xxl: `${pageTitle === 'Home' ? 'row' : 'column'}`
      }}
      flexWrap={{ base: 'wrap', xxl: 'nowrap' }}
      w="100%"
    >
      <PageTitle>{pageTitle}</PageTitle>
      <Flex overflowX={{ base: 'auto' }} w="100%" pb="1rem">
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('hoje')}
          isActive={handleActive('hoje')}
        >
          Hoje
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('ontem')}
          isActive={handleActive('ontem')}
        >
          Ontem
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('7 dias')}
          isActive={handleActive('7 dias')}
        >
          Últimos 7 dias
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('15 dias')}
          isActive={handleActive('15 dias')}
        >
          Últimos 15 dias
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('30 dias')}
          isActive={handleActive('30 dias')}
        >
          Últimos 30 dias
        </Button>
        <Button
          variant="outline"
          mr="0.875rem"
          onClick={() => setActive('3 meses')}
          isActive={handleActive('3 meses')}
        >
          Últimos 3 meses
        </Button>
        <Button
          variant="outline"
          onClick={() => setActive('data')}
          isActive={handleActive('data')}
          mr={{ base: '4rem', xxl: 'auto' }}
        >
          Data Específica <CalendarioIcon ml="0.625rem" />
        </Button>
        {pageTitle === 'Home' && <ExcelExport />}
      </Flex>
    </Flex>
  );
}
