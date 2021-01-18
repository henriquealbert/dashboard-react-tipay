import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Img
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import PageTitle from 'components/PageTitle';

export default function GerarBoletoHeader() {
  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor="#CECECE"
      pb="28px"
    >
      <Box>
        <PageTitle>
          <Img
            src="/images/boleto.png"
            w="52px"
            h="52px"
            display="inline-block"
            mr="22px"
          />
          Gerar Boleto
        </PageTitle>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          color="gray.500"
          mt="18px"
          fontSize="20px"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/boletos">
              Boletos
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontWeight="bold">
            <BreadcrumbLink>Gerar Boleto</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Link to="/boletos">
        <Button variant="red">Cancelar</Button>
      </Link>
    </Flex>
  );
}
