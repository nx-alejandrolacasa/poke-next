import type { Metadata } from 'next'
import { Suspense } from 'react'
import LoadingPokedex from '@/app/pokedex/loading'
import { fetchPokemonList } from '@/utils/pokemon'
import { Pagination } from '@/components/Pagination'
import { PokemonTile } from '@/components/PokemonTile'

export const metadata: Metadata = {
  title: 'PokéNext - Pokédex',
  description: 'Pokémon app developed with Next.js',
}

export default async function Pokedex(
  props: {
    searchParams?: Promise<{ page: string }>
  }
) {
  const searchParams = await props.searchParams;
  const { page = '1' } = searchParams ?? { page: '1' }
  const { count, results } = await fetchPokemonList(parseInt(page, 10))

  return (
    <Suspense fallback={<LoadingPokedex />}>
      <ul className="grid grid-cols-2 gap-4 pb-8 md:grid-cols-3">
        {results.map((pokemon) => (
          <li className="list-none" key={pokemon.name}>
            <PokemonTile pokemon={pokemon} />
          </li>
        ))}
      </ul>
      <div className="my-4 flex justify-center">
        <Pagination count={count} page={parseInt(page, 10)} />
      </div>
    </Suspense>
  )
}
