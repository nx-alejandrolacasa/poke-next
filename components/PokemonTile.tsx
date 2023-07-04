import { Pokemon, getPokemonImage } from '@/utils/pokemon'
import Link from 'next/link'
import Image from 'next/image'

type PokemonTileProps = {
  loading?: boolean
  pokemon: Pokemon
}

export function PokemonTile({ loading = false, pokemon }: PokemonTileProps) {
  return (
    <div className="rounded-xl border border-white p-4 text-center shadow-lg hover:border-slate-500">
      <Link href={`/pokemon/${pokemon.name}`} title={pokemon.name}>
        <span className="mb-4 block truncate text-xl font-bold capitalize">
          {pokemon.name.replaceAll('-', ' ')}
        </span>
        <Image
          alt={`${pokemon.name} official artwork`}
          className="aspect-square"
          height={475}
          src={loading ? '/loading.svg' : getPokemonImage(pokemon)}
          width={475}
        />
      </Link>
    </div>
  )
}
