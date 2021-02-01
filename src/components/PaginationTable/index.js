import { Flex } from '@chakra-ui/react';
import {
  Paginator,
  Previous,
  Page,
  Next,
  PageGroup,
  generatePages
} from 'chakra-paginator';

export default function PaginationTable({ data }) {
  // Calculated or obtained from Backend
  const pagesQuantity = data?.page_count;

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
    }
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
    }
  };

  // handlers
  const handlePageChange = (page) => {
    // Request new data using the page number
    console.log(page);
  };

  return (
    <Flex mb="54px" justifyContent="center">
      <Paginator
        onPageChange={handlePageChange}
        pagesQuantity={Number(pagesQuantity) - 1}
      >
        <Previous
          h="3.75rem"
          px="1rem"
          bg="gray.1200"
          border="0.063rem solid"
          borderColor="gray.1300"
          color="brand.200"
          borderRadius="0.313rem 0 0 0.313rem"
        >
          Anterior
          {/* i.e. an icon from `react-icons` */}
        </Previous>
        <PageGroup>
          {generatePages(pagesQuantity)?.map((page) => (
            <Page
              key={`paginator_page_${page}`}
              activeStyles={activeStyles}
              normalStyles={normalStyles}
              page={page}
            />
          ))}
        </PageGroup>
        <Next
          h="3.75rem"
          px="1rem"
          bg="gray.1200"
          border="0.063rem solid"
          borderColor="gray.1300"
          color="brand.200"
          borderRadius="0 0.313rem 0.313rem 0"
        >
          Próximo
          {/* i.e. an icon from `react-icons` */}
        </Next>
      </Paginator>
    </Flex>
  );
}
