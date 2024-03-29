import { getPokemonName } from '@/utils/pokemon'
import { PokemonDetail } from '@/components/PokemonDetail'

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

  return <PokemonDetail name={name} />
}
