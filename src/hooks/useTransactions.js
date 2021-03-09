import { useQuery } from 'react-query';
import api from 'api';

export default function useTransactions(ctx) {
  const ID = ctx.identification ? `/id=${ctx.identification}` : '';
  const PAYER = ctx.payer ? `/payer=${ctx.payer}` : '';
  const VALUE = ctx.amount ? `/value=${ctx.amount}` : '';
  const STATUS = ctx.status ? `/status=${ctx.status}` : '';
  const START_DATE = ctx.start_date ? `/start_date=${ctx.start_date}` : '';
  const END_DATE = ctx.end_date ? `/end_date=${ctx.end_date}` : '';
  const PAYMENT_TYPE = ctx.paymentType
    ? `/payment_type=${ctx.paymentType}`
    : '';
  const PER_PAGE = ctx.per_Page ? `/per_page=${ctx.per_Page}` : '';
  const PAGE = ctx.page ? `/${ctx.page}` : '/1';

  return useQuery(
    [
      'Transactions',
      ctx?.identification,
      ctx?.payer,
      ctx?.value,
      ctx?.status,
      ctx?.start_date,
      ctx?.end_date,
      ctx?.paymentType,
      ctx?.per_page,
      ctx?.page
    ],
    () =>
      api
        .get(
          `v1/transactions${ID}${PAYER}${VALUE}${START_DATE}${END_DATE}${STATUS}${PAYMENT_TYPE}${PER_PAGE}${PAGE}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true, enabled: !!ctx.page }
  );
}
