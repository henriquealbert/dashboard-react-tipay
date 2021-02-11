import { useQuery } from 'react-query';
import api from 'api';

export default function useProfile() {
  return useQuery(
    ['profile'],
    () => api.get('v1/store/profile.json').then((res) => res.data),
    { keepPreviousData: true }
  );
}
