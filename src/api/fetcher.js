import api from 'api';

export async function fetcher(url) {
  const res = await api.get(url);

  if (res?.status === 200) {
    return res?.data;
  } else {
    throw new Error(res?.response?.data?.message);
  }
}
