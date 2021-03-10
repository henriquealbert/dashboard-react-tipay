import { Box } from '@chakra-ui/react';
import PercentageItem from './PercentageItem';

export default function SalesPercentages({ data }) {
  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridColumnGap={{ base: '1rem', xxl: '1.3rem' }}
      maxH={{ base: '179px', xxl: '211px' }}
    >
      {data?.map((item) => (
        <PercentageItem
          key={item?.label}
          value={item?.value}
          label={item?.label}
          color={
            item?.label === 'Débito'
              ? 'brand.yellow'
              : item?.label === 'Crédito'
              ? 'brand.waterBlue'
              : 'brand.darkBlue'
          }
        />
      ))}
    </Box>
  );
}
