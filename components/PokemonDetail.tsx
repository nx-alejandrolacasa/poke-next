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

  const pokemon = await fetchPokemonByName(name, { cache: 'force-cache' })

  if (!pokemon) {
    return null
  }

  return (
    <div className="flex w-full flex-col justify-between md:flex-row">
      <div>
        <h2 className="mb-4 block truncate text-2xl font-bold capitalize md:text-4xl">
          <span className="text-slate-500">#{pokemon.order}</span>&nbsp;
          {getPokemonName(name)}
        </h2>
        <ul
          className={`${inter.className} flex flex-col gap-2 py-5 text-lg md:gap-4 md:pt-10 md:text-2xl`}
        >
          <li>
            {pokemon.types.length > 1 ? 'Types' : 'Type'}:&nbsp;
            <b className="capitalize">
              {pokemon.types.map(({ type }) => type.name).join(', ')}
            </b>
          </li>
          <li>
            Height: <b>{pokemon.height} dm.</b>
          </li>
          <li>
            Weight: <b>{pokemon.weight} hg.</b>
          </li>
        </ul>
      </div>
      <div>
        <Image
          className="mt-5 aspect-square rounded-2xl bg-slate-200 md:ml-10 md:mt-0"
          src={getPokemonImage(pokemon)}
          alt={`${pokemon.name} official artwork`}
          height={475}
          width={475}
        />
      </div>
    </div>
  )
}
