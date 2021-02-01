import { Spinner } from '@chakra-ui/react';
import { useQueryClient } from 'react-query';

export default function GlobalLoader() {
  const queryClient = useQueryClient();

  const isFetching = queryClient.isFetching();

  if (isFetching) {
    return <Spinner position="absolute" right="1rem" top="8rem" />;
  }

  return null;
}
