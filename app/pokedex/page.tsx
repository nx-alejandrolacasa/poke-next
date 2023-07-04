import { Pagination } from '@/components/Pagination'
import { PokemonTile } from '@/components/PokemonTile'
import { fetchPokemonList } from '@/utils/pokemon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PokéNext - Pokédex',
  description: 'Pokémon app developed with Next.js',
}

export default async function Pokedex({
  searchParams,
}: {
  searchParams?: { page: string }
}) {
  const { page = '1' } = searchParams ?? { page: '1' }
  const { count, results } = await fetchPokemonList(parseInt(page, 10))

  return (
    <>
      <ul className="grid grid-cols-3 gap-4 pb-8">
        {results.map((pokemon) => (
          <li className="list-none" key={pokemon.name}>
            <PokemonTile pokemon={pokemon} />
          </li>
        ))}
      </ul>
      <div className="my-4 flex justify-center">
        <Pagination count={count} page={parseInt(page, 10)} />
      </div>
    </>
  )
}
