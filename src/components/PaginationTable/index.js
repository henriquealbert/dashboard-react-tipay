import { Flex } from '@chakra-ui/react';
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup
} from 'chakra-paginator';

export default function PaginationTable({ data, setPage }) {
  // Calculated or obtained from Backend
  const pagesQuantity = data?.page_count;
  const outerLimit = 2;
  const innerLimit = 2;

  const handlePageChange = (page) => {
    // -> request new data using the page number
    setPage(page);
  };

  return (
    <Flex mb="54px" justifyContent="center">
      <Paginator
        activeStyles={activeStyles}
        innerLimit={innerLimit}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container>
          <Previous
            h="3.75rem"
            px="1rem"
            bg="gray.1200"
            border="0.063rem solid"
            borderColor="gray.1300"
            color="brand.200"
            borderRadius="0.313rem 0 0 0.313rem"
            _hover={{
              bg: '#40474F',
              color: 'white'
            }}
          >
            Anterior
          </Previous>
          <PageGroup isInline align="center" spacing="0" />
          <Next
            h="3.75rem"
            px="1rem"
            bg="gray.1200"
            border="0.063rem solid"
            borderColor="gray.1300"
            color="brand.200"
            borderRadius="0 0.313rem 0.313rem 0"
            _hover={{
              bg: '#40474F',
              color: 'white'
            }}
          >
            Próximo
          </Next>
        </Container>
      </Paginator>
    </Flex>
  );
}

// styles
const normalStyles = {
  color: 'brand.200',
  bg: 'gray.1200',
  border: '0.063rem solid',
  borderColor: 'gray.1300',
  padding: '1.125rem 1.625rem',
  width: '3.75rem',
  height: '3.75rem',
  borderRadius: '0',
  cursor: 'pointer',
  _hover: {
    bg: '#40474F',
    color: 'white'
  },
  margin: 0
};

const activeStyles = {
  color: 'white',
  bg: 'linear-gradient(180deg, #0A172D 0%, #40474F 100%)',
  padding: '1.125rem 1.625rem',
  width: '3.75rem',
  height: '3.75rem',
  borderRadius: '0',
  cursor: 'pointer',
  _hover: {
    bg: 'linear-gradient(180deg, #40474F 0%, #40474F 100%)'
  },
  margin: 0
};
