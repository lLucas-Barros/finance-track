import { CardResumo } from "@/components/CardResumo"

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <CardResumo titulo="Receitas" valor="R$ 0,00" cor="#16a34a" />
        <CardResumo titulo="Despesas" valor="R$ 0,00" cor="#dc2626" />
        <CardResumo titulo="Saldo" valor="R$ 0,00" cor="#2563eb" />
      </div>
    </main>
  )
}