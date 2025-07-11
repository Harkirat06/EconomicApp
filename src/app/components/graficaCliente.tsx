// components/GraficaCliente.tsx (Client Component)
'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PIBDataPoint } from '../lib/types'

export default function GraficaCliente({ data }: { data: PIBDataPoint[] }) {

  const formatYAxis = (tickItem: number) => {
    return `${tickItem.toLocaleString()}B`; // B para miles de millones (Billions)
  };

  const formatTooltip = (value: number) => {
    return [`${value.toLocaleString(undefined, { maximumFractionDigits: 2 })} mil millones`, 'PIB'];
  };

  return (
    <div className="w-full h-[300px] bg-card rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20, // Aumenta este valor para dar más espacio a la izquierda
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip formatter={formatTooltip} />
          <Line type="monotone" dataKey="PIB" stroke="#007bff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}