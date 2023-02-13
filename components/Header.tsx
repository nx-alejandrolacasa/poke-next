export function Header() {
  return (<div className="flex h-24 items-center justify-center bg-slate-100 px-4">
  <nav className="flex w-full max-w-5xl items-center justify-between gap-4">
    <a href="/" title="Go home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="h-16" src="/pokemon-logo.svg" alt="Pokemon" />
    </a>
    <a className="text-xl font-bold hover:underline" href="/pokedex">Pokédex</a>
  </nav>
</div>
)
}