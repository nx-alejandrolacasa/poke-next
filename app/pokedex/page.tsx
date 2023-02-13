import { Pagination } from '@/components/Pagination'
import { PokemonTile } from '@/components/PokemonTile'
import { fetchPokemonList } from '@/utils/pokemon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PokéNext - Pokédex',
}

export default async function Podedex({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const { page = '1' } = searchParams
  const { count, results } = await fetchPokemonList(parseInt(page, 10))

  return (
    <>
      <ul className="grid grid-cols-3 gap-4">
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
