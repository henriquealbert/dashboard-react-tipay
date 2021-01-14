import { Flex } from '@chakra-ui/react';
import {
  Paginator,
  Previous,
  Page,
  Next,
  PageGroup,
  generatePages
} from 'chakra-paginator';

export default function PaginationTable() {
  // Calculated or obtained from Backend
  const pagesQuantity = 5;

  // styles
  const normalStyles = {
    color: 'brand.200',
    bg: 'gray.1200',
    border: '1px solid',
    borderColor: 'gray.1300',
    padding: '18px 26px',
    width: '60px',
    height: '60px',
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
    padding: '18px 26px',
    width: '60px',
    height: '60px',
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
          h="60px"
          px="16px"
          bg="gray.1200"
          border="1px solid"
          borderColor="gray.1300"
          color="brand.200"
          borderRadius="5px 0 0 5px"
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
          h="60px"
          px="16px"
          bg="gray.1200"
          border="1px solid"
          borderColor="gray.1300"
          color="brand.200"
          borderRadius="0 5px 5px 0"
        >
          Próximo
          {/* i.e. an icon from `react-icons` */}
        </Next>
      </Paginator>
    </Flex>
  );
}
