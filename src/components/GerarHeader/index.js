import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Icon
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import PageTitle from 'components/PageTitle';

export default function GerarHeader({
  pageTitle,
  breadcrumb,
  breadcrumbItem,
  backUrl,
  icon
}) {
  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor="#CECECE"
      pb="1.75rem"
    >
      <Box>
        <PageTitle>
          <Icon
            as={icon}
            w="52px"
            h="52px"
            display="inline-block"
            mr="1.375rem"
          />
          {pageTitle}
        </PageTitle>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          color="gray.500"
          mt="1.125rem"
          fontSize="1.25rem"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={backUrl}>
              {breadcrumb}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontWeight="bold">
            <BreadcrumbLink>{breadcrumbItem}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Link to={backUrl}>
        <Button variant="red">Cancelar</Button>
      </Link>
    </Flex>
  );
}
