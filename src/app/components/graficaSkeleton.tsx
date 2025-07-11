// components/GraficaSkeleton.tsx (Esqueleto de carga)
export default function GraficaSkeleton() {
  return (
    <div className="w-full h-[300px] bg-muted rounded-xl animate-pulse flex items-center justify-center text-foreground">
      Cargando gráfico...
    </div>
  )
}
