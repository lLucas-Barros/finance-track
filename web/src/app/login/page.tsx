import Link from "next/link"

export default function LoginPage() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-sm bg-white p-8 rounded shadow space-y-6">
        <h1 className="text-2xl font-bold text-center">Entrar na conta</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition"
          >
            Entrar
          </button>
        </form>
        <div className="text-center text-sm text-slate-600">
          Não tem conta?{" "}
          <Link href="/cadastro" className="text-slate-900 font-medium hover:underline">
            Cadastre-se
          </Link>
        </div>
      </div>
    </main>
  )
}