import { Modal } from '@/components/Modal'
import { PokemonDetail } from '@/components/PokemonDetail'
import { getPokemonName } from '@/utils/pokemon'

export async function generateMetadata(props: {
  params: Promise<{ name: string }>
}) {
  const params = await props.params
  const { name } = params
  return {
    title: `PokéNext - ${getPokemonName(name)}`,
    description: 'Pokémon app developed with Next.js',
  }
}

export default async function Pokemon(props: {
  params: Promise<{ name: string }>
}) {
  const params = await props.params
  const { name } = params

  return (
    <Modal>
      <PokemonDetail name={name} />
    </Modal>
  )
}
