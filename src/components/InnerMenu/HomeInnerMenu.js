import { Button, Flex } from '@chakra-ui/react';

import { ExportarIcon } from 'styles/icons';
import InnerMenu from '.';

export default function HomeInnerMenu() {
  return (
    <Flex justifyContent="space-between">
      <InnerMenu pageTitle="Home" />
      <Button variant="outline" isLoading={false} loadingText="Exportando...">
        <ExportarIcon mr="8px" />
        Exportar Excel
      </Button>
    </Flex>
  );
}
