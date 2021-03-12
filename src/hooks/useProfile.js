import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useProfile() {
  return useQuery(['Profile'], () => fetcher('v1/store/profile.json'), {
    keepPreviousData: true
  });
}
