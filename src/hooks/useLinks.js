import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useLinks(ctx) {
  const ID = ctx.identification ? `/id=${ctx.identification}` : '';
  const DESCRIPTION = ctx.description ? `/description=${ctx.description}` : '';
  const AMOUNT = ctx.amount ? `/amount=${ctx.amount}` : '';
  const ISACTIVE = ctx.is_active ? `/is_active=${ctx.is_active}` : '';
  const START_DATE = ctx.start_date ? `/start_date=${ctx.start_date}` : '';
  const END_DATE = ctx.end_date ? `/end_date=${ctx.end_date}` : '';
  const PER_PAGE = ctx.per_Page ? `/per_page=${ctx.per_Page}` : '';
  const PAGE = ctx.page ? `/${ctx.page}` : '/1';

  return useQuery(
    [
      'Links & QR Code',
      ctx.identification,
      ctx.description,
      ctx.amount,
      ctx.is_active,
      ctx.start_date,
      ctx.end_date,
      ctx.per_page,
      ctx.page
    ],
    () =>
      fetcher(
        `v1/links${ID}${AMOUNT}${START_DATE}${END_DATE}${ISACTIVE}${DESCRIPTION}${PER_PAGE}${PAGE}.json`
      ),
    { keepPreviousData: true, enabled: !!ctx.page }
  );
}
