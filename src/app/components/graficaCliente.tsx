'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { PIBDataPoint } from '../lib/types'

import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';


// Define una interfaz más precisa para las props que tu CustomTooltip recibirá

interface CustomTooltipProps {

  active?: boolean;

  payload?: Array<{

    name: NameType;

    value: ValueType;

    color?: string; // Color de la línea (si se define)

    dataKey?: string; // La clave de los datos, en tu caso 'PIB'

    payload?: PIBDataPoint; // Acceso al objeto de datos original, si lo necesitas

  }>;

  label?: string | number; // El año en tu caso

}



// Componente de Tooltip personalizado

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {

  if (active && payload && payload.length) {

   

    return (

      <div

        className="rounded-md p-2 shadow-lg bg-card text-foreground border-2"

      >

        <p className="font-bold">{`Año: ${label}`}</p>

        {payload.map((entry, index) => (

          <p key={`item-${index}`} style={{ color: entry.color }}>

            {`${entry.name}: ${typeof entry.value === 'number' ? entry.value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : entry.value} B`}

          </p>

        ))}

      </div>

    );

  }


  return null;

};


export default function GraficaCliente({ data }: { data: PIBDataPoint[] }) {


  const formatYAxis = (tickItem: number) => {

    return `${tickItem.toLocaleString()}B`;

  };


  return (

    <div className="w-full h-[300px] bg-card rounded-xl p-4">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart

          data={data}

          margin={{

            top: 20,

            right: 20,

            left: 20,

            bottom: 10,

          }}

        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />

          <YAxis tickFormatter={formatYAxis} />

          <Tooltip content={<CustomTooltip />} />

          <Line type="monotone" dataKey="PIB" stroke="#0350a3" strokeWidth={2} />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )

} 