import { useQuery } from 'react-query';
import api from 'api';

export default function useTransfers(ctx) {
  const ID = ctx.identification ? `/id=${ctx.identification}` : '';
  const AMOUNT = ctx.amount ? `/amount=${ctx.amount}` : '';
  const STATUS = ctx.status ? `/status=${ctx.status}` : '';
  const START_DATE = ctx.start_date ? `/start_date=${ctx.start_date}` : '';
  const END_DATE = ctx.end_date ? `/end_date=${ctx.end_date}` : '';

  const PER_PAGE = ctx.per_Page ? `/per_page=${ctx.per_Page}` : '';
  const PAGE = ctx.page ? `/${ctx.page}` : '/1';

  return useQuery(
    [
      'Transfers',
      ctx.id,
      ctx.amount,
      ctx.start_date,
      ctx.end_date,
      ctx.status,
      ctx.per_page,
      ctx.page
    ],
    () =>
      api
        .get(
          `v1/transfers${ID}${AMOUNT}${START_DATE}${END_DATE}${STATUS}${PER_PAGE}${PAGE}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true, enabled: !!ctx.page }
  );
}
