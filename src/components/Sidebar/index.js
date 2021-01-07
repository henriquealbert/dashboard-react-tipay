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
      direction="column"
      w="129px"
      h="100vh"
      bg="white"
      pt="100px"
      position="fixed"
      zIndex="sticky"
      boxShadow="0px 3px 20px #0000003D"
      alignItems="center"
    >
      <MenuItem icon={HomeIcon} w="25px" h="20px" text="Home" pathname="/" />
      <MenuItem
        icon={VendasIcon}
        w="21px"
        h="23px"
        text="Vendas"
        pathname="/vendas"
      />
      <MenuItem
        icon={BoletosIcon}
        w="25px"
        h="18px"
        text="Boletos"
        pathname="/boletos"
      />
      <MenuItem
        icon={LinkQRCodeIcon}
        w="27px"
        h="27px"
        text="Link/QR code"
        pathname="/link-qrcode"
      />
      <MenuItem
        icon={TransferenciasIcon}
        w="28px"
        h="22px"
        text="Transferências"
        pathname="/transferencias"
      />
      <MenuItem
        icon={CalendarioIcon}
        w="23px"
        h="23px"
        text="Calendário"
        pathname="/calendario"
      />
    </Flex>
  );
}
