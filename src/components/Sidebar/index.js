import { Flex } from '@chakra-ui/react';

import {
  HomeIcon,
  VendasIcon,
  BoletosIcon,
  LinkQRCodeIcon,
  TransferenciasIcon,
  CalendarioIcon
} from 'styles/icons';
import MenuItem from './MenuItem';

export default function Sidebar() {
  return (
    <Flex
      direction={{ base: 'row', md: 'column' }}
      w={{ base: '100%', md: '8.063rem' }}
      h={{ md: '100vh' }}
      bg="white"
      pt={{ md: '6.25rem' }}
      position="fixed"
      bottom={{ base: '0' }}
      zIndex="sticky"
      boxShadow="0rem 0.188rem 1.25rem #0000003D"
      alignItems="center"
      overflowX={{ base: 'auto', md: 'hidden' }}
    >
      <MenuItem
        icon={HomeIcon}
        w="1.563rem"
        h="1.25rem"
        text="Home"
        pathname="/dashboard"
      />
      <MenuItem
        icon={VendasIcon}
        w="1.313rem"
        h="1.438rem"
        text="Vendas"
        pathname="/vendas"
      />
      <MenuItem
        icon={BoletosIcon}
        w="1.563rem"
        h="1.125rem"
        text="Boletos"
        pathname="/boletos"
      />
      <MenuItem
        icon={LinkQRCodeIcon}
        w="1.688rem"
        h="1.688rem"
        text="Link/QR code"
        pathname="/link-qrcode"
      />
      <MenuItem
        icon={TransferenciasIcon}
        w="1.75rem"
        h="1.375rem"
        text="Transferências"
        pathname="/transferencias"
      />
      <MenuItem
        icon={CalendarioIcon}
        w="1.438rem"
        h="1.438rem"
        text="Calendário"
        pathname="/calendario"
      />
    </Flex>
  );
}
