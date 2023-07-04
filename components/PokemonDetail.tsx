import {
  fetchPokemonByName,
  getPokemonImage,
  getPokemonName,
} from '@/utils/pokemon'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function PokemonDetail({ name }: { name: string }) {
  if (!name) {
    return null
  }

  const pokemon = await fetchPokemonByName(name, { next: { revalidate: 360 } })

  if (!pokemon) {
    return null
  }

  return (
    <div className="flex w-full justify-between">
      <div>
        <h2 className="mb-4 block truncate text-4xl font-bold capitalize">
          {getPokemonName(name)}
        </h2>
        <ul className={`${inter.className} flex flex-col gap-4 pt-10 text-2xl`}>
          <li>
            {pokemon.types.length > 1 ? 'Types' : 'Type'}:&nbsp;
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
      </div>
      <div>
        <Image
          className="aspect-square"
          src={getPokemonImage(pokemon)}
          alt={`${pokemon.name} official artwork`}
          height={475}
          width={475}
        />
      </div>
    </div>
  )
}
