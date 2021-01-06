import { Button, Flex, Text } from '@chakra-ui/react';
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
    <Flex direction={pageTitle === 'Home' ? 'row' : 'column'}>
      <Text
        as="h1"
        color="gray.500"
        fontWeight="bold"
        lineHeight="39px"
        fontSize="40px"
        mb="14px"
        mr="22px"
      >
        {pageTitle}
      </Text>
      <Flex>
        <Button
          variant="outline"
          mr="14px"
          onClick={() => setActive('hoje')}
          isActive={handleActive('hoje')}
        >
          Hoje
        </Button>
        <Button
          variant="outline"
          mr="14px"
          onClick={() => setActive('ontem')}
          isActive={handleActive('ontem')}
        >
          Ontem
        </Button>
        <Button
          variant="outline"
          mr="14px"
          onClick={() => setActive('7 dias')}
          isActive={handleActive('7 dias')}
        >
          Últimos 7 dias
        </Button>
        <Button
          variant="outline"
          mr="14px"
          onClick={() => setActive('15 dias')}
          isActive={handleActive('15 dias')}
        >
          Últimos 15 dias
        </Button>
        <Button
          variant="outline"
          mr="14px"
          onClick={() => setActive('30 dias')}
          isActive={handleActive('30 dias')}
        >
          Últimos 30 dias
        </Button>
        <Button
          variant="outline"
          mr="14px"
          onClick={() => setActive('3 meses')}
          isActive={handleActive('3 meses')}
        >
          Últimos 3 meses
        </Button>
        <Button
          variant="outline"
          onClick={() => setActive('data')}
          isActive={handleActive('data')}
        >
          Data Específica <CalendarioIcon ml="10px" />
        </Button>
      </Flex>
    </Flex>
  );
}
