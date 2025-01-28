import LoadingPokedex from '@/app/pokedex/loading'
import { Pagination } from '@/components/Pagination'
import { PokemonTile } from '@/components/PokemonTile'
import { fetchPokemonList } from '@/utils/pokemon'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'PokéNext - Pokédex',
  description: 'Pokémon app developed with Next.js',
}

type PokedexProps = {
  searchParams?: Promise<{ page: string }>
}

export default async function Pokedex({ searchParams }: PokedexProps) {
  const { page = '1' } = (await searchParams) ?? { page: '1' }
  const { count, results } = await fetchPokemonList(Number.parseInt(page, 10))

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
        <Pagination count={count} page={Number.parseInt(page, 10)} />
      </div>
    </Suspense>
  )
}
