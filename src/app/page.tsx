import { Suspense } from 'react'
import GraficaSkeleton from './components/graficaSkeleton';
import GraficaServer from './components/graficaServer';

export default function HomePage() {
  return (
    <div className="w-full max-w-screen-xl px-6 py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Card title="PIB" value="2,4%" />
        <Card title="Inflación" value="3,1%" />
        <Card title="Desempleo" value="12,5%" />
        <Card title="Deuda Pública" value="98,7%" />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Tendencias Globales</h2>
        <Suspense fallback={<GraficaSkeleton />}>
          <GraficaServer />
        </Suspense>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Mapa Mundial</h2>
        <div className="w-full h-[400px] bg-muted rounded-xl flex items-center justify-center text-sm text-muted-foreground">
          [Mapa temático con inflación global]
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Últimas actualizaciones</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>🔹 Nuevo dato de inflación en España: 3,1%</li>
          <li>🔹 Actualización del desempleo en Brasil</li>
        </ul>
      </section>
    </div>
  )
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-md">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  )
}
