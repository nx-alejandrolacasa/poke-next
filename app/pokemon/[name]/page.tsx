import {
  fetchPokemonByName,
  getPokemonImage,
  getPokemonName,
} from '@/utils/pokemon'

export function generateMetadata({ params }: { params: { name: string } }) {
  const { name } = params
  return {
    title: `PokéNext - ${getPokemonName(name)}`,
    description: 'Pokémon app developed with Next.js',
  }
}

export async function generateStaticParams() {
  return [
    { name: 'pikachu' },
    { name: 'charmander' },
    { name: 'squirtle' },
    { name: 'bulbasaur' },
  ]
}

export default async function Pokemon({
  params,
}: {
  params: { name: string }
}) {
  const { name } = params

  if (!name) {
    return null
  }

  const pokemon = await fetchPokemonByName(name, { next: { revalidate: 60 } })

  if (!pokemon) {
    return null
  }

  return (
    <div className="flex w-full justify-between">
      <ul className="text-2xl">
        <li className="mb-4 block overflow-hidden text-ellipsis whitespace-nowrap text-4xl font-bold capitalize">
          {getPokemonName(name)}
        </li>
        <li>
          {pokemon.types.length > 1 ? 'Types' : 'Type'}:{' '}
          <b className="capitalize">
            {pokemon.types.map(({ type }) => type.name).join(', ')}
          </b>
        </li>
        <li>
          Order: <b>{pokemon.order}</b>
        </li>
        <li>
          Height: <b>{pokemon.height}</b>
        </li>
        <li>
          Weight: <b>{pokemon.weight}</b>
        </li>
      </ul>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="aspect-square"
          src={getPokemonImage(pokemon)}
          alt={`${pokemon.name} official artwork`}
        />
      </div>
    </div>
  )
}
