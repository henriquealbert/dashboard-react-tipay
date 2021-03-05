import { forwardRef } from 'react';
import { Button } from '@chakra-ui/react';
import { CalendarioIcon } from 'styles/icons';

const CustomDateInput = (props, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
      disabled={props.isFetching}
      cursor={props.isFetching ? 'not-allowed' : 'pointer'}
      onClick={() => {
        props.onClick();
        props.setActive('data');
      }}
      isActive={props.handleActive('data')}
      mr={{ base: '4rem', xl: 'auto' }}
    >
      Data Específica <CalendarioIcon ml="0.625rem" />
    </Button>
  );
};

export default forwardRef(CustomDateInput);
