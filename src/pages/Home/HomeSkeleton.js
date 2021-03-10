import { Box, Skeleton } from '@chakra-ui/react';

export default function HomeSkeleton() {
  return (
    <Box bg="gray.200">
      <Box
        display={{ base: 'block', xl: 'grid' }}
        gridTemplateColumns={{ xl: '1fr 1fr', xxl: '2fr 1fr' }}
        gridGap={{ xl: '1.313rem' }}
        w="100%"
        mt="0.5rem"
      >
        <Skeleton
          h="211px"
          boxShadow="0rem 0.188rem 0.625rem #0000000A"
          borderRadius="0.625rem"
          mb={{ base: '1rem', xl: '' }}
        />
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap={{ base: '1rem', xxl: '1.3rem' }}
        >
          <Skeleton
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
            h="211px"
          />
          <Skeleton
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
            h="211px"
          />
          <Skeleton
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
            h="211px"
          />
        </Box>
      </Box>
      <Box
        display={{ base: 'block', xxl: 'grid' }}
        gridTemplateColumns={{ xxl: '2fr 1fr' }}
        gridGap={{ xxl: '1.313rem' }}
        w="100%"
      >
        <Box>
          <Skeleton
            h="290px"
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
            mt="1.125rem"
          />
          <Skeleton
            h="316px"
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
            borderRadius="0.625rem"
            mt="1.125rem"
          />
        </Box>
        <Skeleton
          h="100%"
          minH="578px"
          maxH="624px"
          boxShadow="0rem 0.188rem 0.625rem #0000000A"
          borderRadius="0.625rem"
          mt="1.125rem"
        />
      </Box>
    </Box>
  );
}
