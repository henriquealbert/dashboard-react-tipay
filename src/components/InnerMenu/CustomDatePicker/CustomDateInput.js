import { forwardRef } from 'react';
import { Button } from '@chakra-ui/react';
import { CalendarioIcon } from 'styles/icons';

const CustomDateInput = (props, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      disabled={props.isFetching ? true : false}
      cursor={props.isFetching ? 'not-allowed' : 'pointer'}
      onClick={() => {
        props.onClick();
        props.setActive('data');
      }}
      isActive={props.handleActive('data')}
      mr={{ base: '4rem', xxl: 'auto' }}
    >
      Data Específica <CalendarioIcon ml="0.625rem" />
    </Button>
  );
};

export default forwardRef(CustomDateInput);
