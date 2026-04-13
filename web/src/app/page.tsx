import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Finance Track</h1>
        <p className="text-slate-500">Controle seu dinheiro com inteligência</p>
        <div className="flex gap-3">
        <Link className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition" href="/login">Entrar</Link>
        <Link className="border border-slate-300 px-6 py-2 rounded-lg hover:bg-slate-100 transition" href="/cadastro">Cadastrar</Link>
        </div>
      </div>
    </main>
  )
}