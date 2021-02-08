import { useQuery } from 'react-query';
import api from 'api';
import { normalizeDateUTC } from 'utils/formatDate';

export default function useTransactions(ctx) {
  const ID = ctx.id ? `/id=${ctx.id}` : '';
  const PAYER = ctx.payer ? `/payer=${ctx.payer}` : '';
  const VALUE = ctx.value ? `/value=${ctx.value}` : '';
  const STATUS = ctx.status ? `/status=${ctx.status}` : '';
  const START_DATE = ctx.start_date
    ? `/start_date=${normalizeDateUTC(ctx.start_date)}`
    : '';
  const END_DATE = ctx.end_date
    ? `/end_date=${normalizeDateUTC(ctx.end_date)}`
    : '';
  const PAYMENT_TYPE = ctx.payment_type
    ? `/payment_type=${ctx.payment_type}`
    : '';
  const PER_PAGE = ctx.per_page ? `/per_page=${ctx.per_page}` : '';
  const PAGE = ctx.page ? `/${ctx.page}` : '/1';

  return useQuery(
    [
      'transactions',
      ctx.id,
      ctx.payer,
      ctx.value,
      ctx.status,
      ctx.start_date,
      ctx.end_date,
      ctx.payment_type,
      ctx.per_page,
      ctx.page
    ],
    () =>
      api
        .get(
          `/v1/transactions${ID}${PAYER}${VALUE}${STATUS}${START_DATE}${END_DATE}${PAYMENT_TYPE}${PER_PAGE}${PAGE}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true, enabled: !!ctx.page }
  );
}
