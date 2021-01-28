import { Spinner } from '@chakra-ui/react';
import { useIsFetching } from 'react-query';

export default function GlobalLoader() {
  const isFetching = useIsFetching();

  if (isFetching) {
    return <Spinner position="absolute" right="1rem" top="8rem" />;
  }

  return null;
}
