import { useQuery } from 'react-query';
import api from 'api';

export default function useTransactions(
  id,
  payer,
  value,
  status,
  start_date,
  end_date,
  payment_type,
  per_page,
  page
) {
  const ID = id ? `/id=${id}` : '';
  const PAYER = payer ? `/payer=${payer}` : '';
  const VALUE = value ? `/value=${value}` : '';
  const STATUS = status ? `/status=${status}` : '';
  const START_DATE = start_date ? `/start_date=${start_date}` : '';
  const END_DATE = end_date ? `/end_date=${end_date}` : '';
  const PAYMENT_TYPE = payment_type ? `/payment_type=${payment_type}` : '';
  const PER_PAGE = per_page ? `/per_page=${per_page}` : '';
  const PAGE = page ? `/${page}` : '/1';

  return useQuery(
    [
      'transactions',
      id,
      payer,
      value,
      status,
      start_date,
      end_date,
      payment_type,
      per_page,
      page
    ],
    () =>
      api
        .get(
          `/v1/transactions${ID}${PAYER}${VALUE}${STATUS}${START_DATE}${END_DATE}${PAYMENT_TYPE}${PER_PAGE}${PAGE}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true, enabled: !!page }
  );
}
