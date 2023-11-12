export default function loading() {
  return (
    <ul className="grid grid-cols-2 gap-4 pb-8 md:grid-cols-3">
      {Array.from(Array(24).keys()).map((pos) => (
        <li className="list-none" key={pos}>
          <div className="aspect-[5/6] w-full max-w-[475px] animate-pulse overflow-hidden rounded-xl border-4 border-slate-200 bg-slate-100 text-center shadow-lg hover:border-slate-500"></div>
        </li>
      ))}
    </ul>
  )
}
