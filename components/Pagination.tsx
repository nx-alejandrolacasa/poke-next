'use client'

import Link from 'next/link'
import RCPagination from 'rc-pagination'

type PaginationProps = {
  count: number
  page: number
}

export function Pagination({ count, page }: PaginationProps) {
  return (
    <RCPagination
      className="flex gap-2 text-lg"
      defaultCurrent={page}
      defaultPageSize={24}
      itemRender={(current, type) => {
        const href = current === 1 ? '/pokedex' : `/pokedex?page=${current}`

        if (type === 'jump-next' || type === 'jump-prev') {
          return <span className="cursor-default">...</span>
        }
        if (type === 'page') {
          return (
            <Link
              aria-label={`Go to page ${current}`}
              aria-current={current === page}
              className={`border-2 ${
                current === page
                  ? 'cursor-default border-slate-500'
                  : 'border-white hover:border-slate-500'
              } rounded-md px-3 py-1`}
              href={href}
            >
              {current}
            </Link>
          )
        }
      }}
      showTitle={false}
      total={count}
    />
  )
}
