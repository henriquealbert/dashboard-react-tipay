import { Skeleton, Box } from '@chakra-ui/react';

export default function TableSalesSkeleton() {
  return (
    <>
      <Box mb="2rem" bg="white">
        <Skeleton height="59px" borderRadius="0.625rem 0.625rem 0 0" />
        <Skeleton height="90px" mt="0.1rem" />
        <Skeleton height="90px" mt="0.1rem" />
        <Skeleton height="90px" mt="0.1rem" />
        <Skeleton height="90px" mt="0.1rem" />
        <Skeleton
          height="90px"
          mt="0.1rem"
          borderRadius="0 0 0.625rem 0.625rem"
        />
      </Box>
      <Skeleton
        height="60px"
        w="50%"
        borderRadius="0.625rem"
        mx="auto"
        mb="2rem"
      />
    </>
  );
}
