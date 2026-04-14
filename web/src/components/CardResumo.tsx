interface CardResumoProps {
  titulo: string
  valor: string | number
  cor?: string
}

export function CardResumo({ titulo, valor, cor = undefined }: CardResumoProps) {
  return (
    <div
      className="bg-white rounded-lg shadow p-4 flex flex-col"
      style={cor ? { borderLeft: `6px solid ${cor}` } : {}}
    >
      <span className="text-sm text-slate-500">{titulo}</span>
      <span className="text-2xl font-bold mt-1" style={cor ? { color: cor } : {}}>
        {valor}
      </span>
    </div>
  )
}





