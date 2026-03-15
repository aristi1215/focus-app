import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

export const AreaChart = ({data, angle}: {data: {}[], angle?: number}) => {

   if (!data || data.length === 0) return null

  return (
    <LineChart
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '20rem',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis 
        dataKey={Object.keys(data[0])[0]} 
        stroke="black"
        fontSize={10}
        angle={angle}
        textAnchor="end"
        height={30}
      />
      <YAxis width="auto" stroke="black" />
      <Tooltip
        cursor={{
          stroke: 'var(--color-border-2)',
        }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />
      <Line
        type="monotone"
        dataKey={Object.keys(data[0])[1]}
        stroke="black"
        dot={{
          fill: 'black',
        }}
      />
    </LineChart>
  )
}
